export function otpEmail (){
    return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Verify Your Email - ChurchConnect</title>
  
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      max-width: 100%;
    }
  </style>
</head>

<body style="margin: 0; padding: 0; background-color: #f5f5f5;">
  <!-- Wrapper Table -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Main Container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 0 0 24px 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <div style="display: inline-flex; align-items: center; gap: 12px;">
                      <!-- Logo Icon -->
                      <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #db2777 0%, #e11d48 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m2 12 3-3 3 3"></path>
                          <path d="m13 13 3-3 3 3"></path>
                          <path d="M5 9v12"></path>
                          <path d="M16 10v12"></path>
                          <rect width="20" height="8" x="2" y="13" rx="2"></rect>
                        </svg>
                      </div>
                      <!-- Brand Name -->
                      <span style="font-size: 24px; font-weight: 700; color: #1a1a1a; letter-spacing: -0.5px;">ChurchConnect</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Main Content Card -->
          <tr>
            <td style="background-color: #ffffff; border-radius: 24px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); overflow: hidden;">
              
              <!-- Hero Section with Gradient -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background: linear-gradient(135deg, #db2777 0%, #e11d48 100%); padding: 48px 40px; text-align: center;">
                    <!-- Icon Circle -->
                    <div style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                      <div style="width: 64px; height: 64px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; line-height: 1.3;">Verify Your Email</h1>
                    <p style="margin: 12px 0 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.95); line-height: 1.5;">Welcome to ChurchConnect! Let's get you started.</p>
                  </td>
                </tr>
              </table>
              
              <!-- Content Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 48px 40px;">
                    
                    <!-- Greeting -->
                    <p style="margin: 0 0 24px 0; font-size: 16px; color: #1a1a1a; line-height: 1.6;">
                      Hi <strong>{{USER_NAME}}</strong>,
                    </p>
                    
                    <p style="margin: 0 0 32px 0; font-size: 16px; color: #4a5568; line-height: 1.6;">
                      Thank you for signing up! To complete your registration and secure your account, please verify your email address using the code below.
                    </p>
                    
                    <!-- OTP Code Container -->
                    <div style="background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%); border: 2px solid #fbcfe8; border-radius: 16px; padding: 32px; text-align: center; margin: 0 0 32px 0;">
                      <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #831843; text-transform: uppercase; letter-spacing: 1px;">Your Verification Code</p>
                      
                      <!-- OTP Code -->
                      <div style="background-color: #ffffff; border-radius: 12px; padding: 20px; display: inline-block; box-shadow: 0 2px 8px rgba(219, 39, 119, 0.15);">
                        <span style="font-size: 36px; font-weight: 700; color: #db2777; letter-spacing: 8px; font-family: 'Courier New', monospace;">{{OTP_CODE}}</span>
                      </div>
                      
                      <p style="margin: 16px 0 0 0; font-size: 13px; color: #9d174d; line-height: 1.5;">
                        This code expires in <strong>10 minutes</strong>
                      </p>
                    </div>
                    
                    <!-- Instructions -->
                    <div style="background-color: #f8fafc; border-left: 4px solid #db2777; border-radius: 8px; padding: 20px 24px; margin: 0 0 32px 0;">
                      <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #1a1a1a;">Quick Steps:</p>
                      <ol style="margin: 0; padding-left: 20px; font-size: 14px; color: #4a5568; line-height: 1.8;">
                        <li>Return to the ChurchConnect verification page</li>
                        <li>Enter the 6-digit code above</li>
                        <li>Complete your church setup</li>
                      </ol>
                    </div>
                    
                    <!-- CTA Button (Alternative) -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 32px 0;">
                      <tr>
                        <td align="center">
                          <a href="{{VERIFICATION_URL}}" style="display: inline-block; background: linear-gradient(135deg, #db2777 0%, #e11d48 100%); color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; padding: 16px 40px; border-radius: 12px; box-shadow: 0 4px 12px rgba(219, 39, 119, 0.3); transition: all 0.3s ease;">
                            Verify Email Now →
                          </a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Security Notice -->
                    <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
                      <p style="margin: 0 0 8px 0; font-size: 13px; color: #6b7280; line-height: 1.6;">
                        <strong>Security tip:</strong> If you didn't create an account with ChurchConnect, please ignore this email or contact our support team.
                      </p>
                      <p style="margin: 0; font-size: 13px; color: #6b7280; line-height: 1.6;">
                        Never share your verification code with anyone. ChurchConnect will never ask for this code via phone or email.
                      </p>
                    </div>
                    
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 32px 20px 0 20px; text-align: center;">
              
              <!-- Social Links -->
              <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto 24px auto;">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="{{FACEBOOK_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#4a5568">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="{{TWITTER_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#4a5568">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="{{INSTAGRAM_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Footer Links -->
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #6b7280;">
                <a href="{{HELP_URL}}" style="color: #db2777; text-decoration: none; font-weight: 500;">Help Center</a>
                <span style="color: #d1d5db; margin: 0 8px;">•</span>
                <a href="{{PRIVACY_URL}}" style="color: #db2777; text-decoration: none; font-weight: 500;">Privacy Policy</a>
                <span style="color: #d1d5db; margin: 0 8px;">•</span>
                <a href="{{TERMS_URL}}" style="color: #db2777; text-decoration: none; font-weight: 500;">Terms of Service</a>
              </p>
              
              <!-- Copyright -->
              <p style="margin: 0 0 16px 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                © 2025 ChurchConnect. All rights reserved.<br>
                Empowering churches to connect and grow.
              </p>
              
              <!-- Unsubscribe -->
              <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                {{CHURCH_ADDRESS}}<br>
                <a href="{{UNSUBSCRIBE_URL}}" style="color: #9ca3af; text-decoration: underline;">Unsubscribe</a> from verification emails
              </p>
              
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>`;
    
}