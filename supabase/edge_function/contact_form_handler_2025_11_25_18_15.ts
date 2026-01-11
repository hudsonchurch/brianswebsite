import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType?: string;
  location?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

// Helper function to determine from email
function getFromEmail() {
  const domain = Deno.env.get('RESEND_DOMAIN');
  if (domain) {
    return `send@${domain}`;
  }
  return 'onboarding@resend.dev'; // Default fallback
}

// Format phone number as clickable tel link
function formatPhoneLink(phone: string): string {
  if (!phone) return 'Not specified';
  const cleanPhone = phone.replace(/\D/g, '');
  return `<a href="tel:${cleanPhone}" style="color: #0066cc; text-decoration: none;">${phone}</a>`;
}

// Format email as clickable mailto link
function formatEmailLink(email: string): string {
  return `<a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>`;
}

// Generate dynamic subject line
function generateSubjectLine(data: ContactFormData): string {
  const projectType = data.projectType || 'Project';
  const location = data.location || '';
  const lastName = data.lastName;
  
  if (location) {
    return `New Inquiry: ${projectType} in ${location} - ${lastName}`;
  } else {
    return `New Inquiry: ${projectType} - ${lastName}`;
  }
}

// Generate formatted email HTML
function generateEmailHTML(data: ContactFormData): string {
  const projectDescription = data.message || 'Not specified';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Website Inquiry</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; color: #2c3e50; margin-bottom: 10px; border-bottom: 2px solid #3498db; padding-bottom: 5px; }
        .info-grid { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
        .info-item { margin-bottom: 8px; }
        .label { font-weight: bold; color: #34495e; }
        .description { background-color: #ffffff; padding: 15px; border-left: 4px solid #3498db; margin: 10px 0; white-space: pre-wrap; }
        .footer { text-align: center; color: #7f8c8d; font-size: 12px; margin-top: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; color: #2c3e50;">New Website Inquiry</h1>
        </div>
        
        <div class="section">
          <div class="section-title">At a Glance (Qualifier Section)</div>
          <div class="info-grid">
            <div class="info-item"><span class="label">Project Type:</span> ${data.projectType || 'Not specified'}</div>
            <div class="info-item"><span class="label">Location:</span> ${data.location || 'Not specified'}</div>
            <div class="info-item"><span class="label">Budget:</span> ${data.budget || 'Not specified'}</div>
            <div class="info-item"><span class="label">Timeline:</span> ${data.timeline || 'Not specified'}</div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">The Vision</div>
          <div class="description">${projectDescription}</div>
        </div>
        
        <div class="section">
          <div class="section-title">Client Details</div>
          <div class="info-grid">
            <div class="info-item"><span class="label">Name:</span> ${data.firstName} ${data.lastName}</div>
            <div class="info-item"><span class="label">Email:</span> ${formatEmailLink(data.email)}</div>
            <div class="info-item"><span class="label">Phone:</span> ${formatPhoneLink(data.phone || '')}</div>
          </div>
        </div>
        
        <div class="footer">
          Sent from Brian Church Architecture Website
        </div>
      </div>
    </body>
    </html>
  `;
}

// Send email using Resend API
async function sendEmail(data: ContactFormData): Promise<{ success: boolean; message?: string; error?: string }> {
  // Use the provided API key
  const resendApiKey = 're_WTZZyNsU_HrWqahSdt6aJMxgdK28WiAR7';
  
  if (!resendApiKey) {
    console.log('No Resend API key found, skipping email notification');
    return { success: false, error: 'Email service not configured' };
  }
  
  try {
    const subject = generateSubjectLine(data);
    const htmlContent = generateEmailHTML(data);
    const textContent = htmlContent.replace(/<[^>]*>/g, ''); // Strip HTML for text version
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: 'hchurch@avenixpartners.com', // Updated recipient email for testing
        reply_to: data.email, // CRITICAL: Set reply-to to client's email
        subject: subject,
        html: htmlContent,
        text: textContent
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    const result = await response.json();
    return { success: true, message: `Email sent successfully with ID: ${result.id}` };
    
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Parse request body
    const formData: ContactFormData = await req.json();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: firstName, lastName, email' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Insert form data into database
    const { data: insertData, error: insertError } = await supabase
      .from('contact_submissions_2025_11_25_18_15')
      .insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        project_type: formData.projectType || null,
        project_location: formData.location || null,
        budget_range: formData.budget || null,
        timeline: formData.timeline || null,
        project_description: formData.message || null
      })
      .select()
      .single();
    
    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to save form submission' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Send email notification
    const emailResult = await sendEmail(formData);
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        submissionId: insertData.id,
        emailSent: emailResult.success,
        emailMessage: emailResult.message || emailResult.error
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Contact form handler error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});