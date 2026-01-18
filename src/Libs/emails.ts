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


export function  birthdayEmail(){
  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Happy Birthday from ChurchConnect</title>
  
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

<body style="margin: 0; padding: 0; background-color: #fef3c7;">
  <!-- Wrapper Table -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);">
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
            <td style="background-color: #ffffff; border-radius: 24px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12); overflow: hidden;">
              
              <!-- Hero Section with Birthday Gradient -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); padding: 56px 40px; text-align: center; position: relative;">
                    
                    <!-- Decorative Elements -->
                    <div style="position: absolute; top: 20px; left: 20px; width: 60px; height: 60px; background-color: rgba(255, 255, 255, 0.15); border-radius: 50%; opacity: 0.7;"></div>
                    <div style="position: absolute; bottom: 30px; right: 30px; width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.6;"></div>
                    <div style="position: absolute; top: 50%; left: 10%; width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.12); border-radius: 50%; opacity: 0.5;"></div>
                    <div style="position: absolute; top: 20%; right: 15%; width: 50px; height: 50px; background-color: rgba(255, 255, 255, 0.08); border-radius: 50%; opacity: 0.6;"></div>
                    
                    <!-- Birthday Cake Icon with Animation Effect -->
                    <div style="width: 96px; height: 96px; background-color: rgba(255, 255, 255, 0.25); backdrop-filter: blur(10px); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                      <div style="width: 80px; height: 80px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
                          <path d="M2 21h20"></path>
                          <path d="M7 8v3"></path>
                          <path d="M12 8v3"></path>
                          <path d="M17 8v3"></path>
                          <path d="M7 4h.01"></path>
                          <path d="M12 4h.01"></path>
                          <path d="M17 4h.01"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <h1 style="margin: 0 0 12px 0; font-size: 42px; font-weight: 700; color: #ffffff; line-height: 1.1; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">🎉 Happy Birthday! 🎉</h1>
                    <p style="margin: 0; font-size: 20px; color: rgba(255, 255, 255, 0.98); line-height: 1.5; max-width: 420px; margin: 0 auto; font-weight: 500;">May this special day be filled with joy, love, and God's abundant blessings</p>
                  </td>
                </tr>
              </table>
              
              <!-- Content Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 48px 40px;">
                    
                    <!-- Greeting -->
                    <p style="margin: 0 0 24px 0; font-size: 20px; color: #1a1a1a; line-height: 1.6; text-align: center;">
                      Dear <strong style="color: #f59e0b;">{{MEMBER_NAME}}</strong>,
                    </p>
                    
                    <p style="margin: 0 0 24px 0; font-size: 16px; color: #4a5568; line-height: 1.8; text-align: center;">
                      On this wonderful day, we celebrate <strong>you</strong> and the incredible blessing you are to our church family. Your presence, your faith, and your contributions make our community stronger and more vibrant.
                    </p>
                    
                    <!-- Birthday Verse Card -->
                    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; border-radius: 12px; padding: 32px 28px; margin: 0 0 32px 0; text-align: center;">
                      <p style="margin: 0 0 16px 0; font-size: 18px; font-style: italic; color: #78350f; line-height: 1.8;">
                        "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
                      </p>
                      <p style="margin: 0; font-size: 14px; font-weight: 600; color: #92400e;">
                        — Jeremiah 29:11
                      </p>
                    </div>
                    
                    <p style="margin: 0 0 32px 0; font-size: 16px; color: #4a5568; line-height: 1.8; text-align: center;">
                      As you celebrate another year of life, we pray that God's grace continues to guide you, His love surrounds you, and His peace fills your heart. May this new year of your life bring you closer to His purpose for you and overflow with His blessings.
                    </p>
                    


                    
                    <!-- Call to Action -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 24px 0;">
                      <tr>
                        <td align="center">
                          <p style="margin: 0 0 20px 0; font-size: 15px; color: #4a5568; line-height: 1.6;">
                            We'd love to celebrate with you! Join us this Sunday for a special birthday blessing.
                          </p>
                          <a href="{{CHURCH_WEBSITE}}" style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; padding: 16px 40px; border-radius: 12px; box-shadow: 0 4px 16px rgba(245, 158, 11, 0.35);">
                            View Church Events 🎊
                          </a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Closing Message -->
                   
                    
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
                    <a href="{{FACEBOOK_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <table role="presentation" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td align="center" valign="middle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#4a5568">
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="{{TWITTER_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <table role="presentation" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td align="center" valign="middle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#4a5568">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="{{INSTAGRAM_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <table role="presentation" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td align="center" valign="middle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Footer Links -->
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #6b7280;">
                <a href="{{HELP_URL}}" style="color: #f59e0b; text-decoration: none; font-weight: 500;">Help Center</a>
                <span style="color: #d1d5db; margin: 0 8px;">•</span>
                <a href="{{PRIVACY_URL}}" style="color: #f59e0b; text-decoration: none; font-weight: 500;">Privacy Policy</a>
                <span style="color: #d1d5db; margin: 0 8px;">•</span>
                <a href="{{TERMS_URL}}" style="color: #f59e0b; text-decoration: none; font-weight: 500;">Terms of Service</a>
              </p>
              
              <!-- Copyright -->
              <p style="margin: 0 0 16px 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                © 2025 ChurchConnect. All rights reserved.<br>
                Empowering churches to connect and grow.
              </p>
              
              <!-- Unsubscribe -->
              <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                {{CHURCH_ADDRESS}}<br>
                <a href="{{PREFERENCES_URL}}" style="color: #9ca3af; text-decoration: underline;">Email Preferences</a> • 
                <a href="{{UNSUBSCRIBE_URL}}" style="color: #9ca3af; text-decoration: underline;">Unsubscribe</a>
              </p>
              
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>
`;

}

export function sendAniversaryEmail(){
  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Happy Anniversary from ChurchConnect</title>
  
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

<body style="margin: 0; padding: 0; background-color: #fce7f3;">
  <!-- Wrapper Table -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);">
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
            <td style="background-color: #ffffff; border-radius: 24px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12); overflow: hidden;">
              
              <!-- Hero Section with Anniversary Gradient -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background: linear-gradient(135deg, #db2777 0%, #e11d48 100%); padding: 56px 40px; text-align: center; position: relative;">
                    
                    <!-- Decorative Elements -->
                    <div style="position: absolute; top: 20px; left: 20px; width: 60px; height: 60px; background-color: rgba(255, 255, 255, 0.15); border-radius: 50%; opacity: 0.7;"></div>
                    <div style="position: absolute; bottom: 30px; right: 30px; width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.6;"></div>
                    <div style="position: absolute; top: 50%; left: 10%; width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.12); border-radius: 50%; opacity: 0.5;"></div>
                    <div style="position: absolute; top: 20%; right: 15%; width: 50px; height: 50px; background-color: rgba(255, 255, 255, 0.08); border-radius: 50%; opacity: 0.6;"></div>
                    
                    <!-- Heart Icon with Animation Effect -->
                    <div style="width: 96px; height: 96px; background-color: rgba(255, 255, 255, 0.25); backdrop-filter: blur(10px); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                      <div style="width: 80px; height: 80px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="#db2777" stroke="#db2777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <h1 style="margin: 0 0 12px 0; font-size: 42px; font-weight: 700; color: #ffffff; line-height: 1.1; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">💖 Happy Anniversary! 💖</h1>
                    <p style="margin: 0; font-size: 20px; color: rgba(255, 255, 255, 0.98); line-height: 1.5; max-width: 450px; margin: 0 auto; font-weight: 500;">Celebrating {{YEARS_MARRIED}} years of love, faith, and commitment</p>
                  </td>
                </tr>
              </table>
              
              <!-- Content Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 48px 40px;">
                    
                    <!-- Greeting -->
                    <p style="margin: 0 0 24px 0; font-size: 20px; color: #1a1a1a; line-height: 1.6; text-align: center;">
                      Dear <strong style="color: #db2777;">{{COUPLE_NAMES}}</strong>,
                    </p>
                    
                    <p style="margin: 0 0 24px 0; font-size: 16px; color: #4a5568; line-height: 1.8; text-align: center;">
                      Today marks another beautiful milestone in your journey together. <strong style="color: #db2777;">{{YEARS_MARRIED}} years</strong> of marriage is a testament to your love, dedication, and the grace of God working through your union.
                    </p>
                    
                    <!-- Anniversary Verse Card -->
                    <div style="background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%); border-left: 4px solid #db2777; border-radius: 12px; padding: 32px 28px; margin: 0 0 32px 0; text-align: center;">
                      <p style="margin: 0 0 16px 0; font-size: 18px; font-style: italic; color: #831843; line-height: 1.8;">
                        "Therefore what God has joined together, let no one separate. Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres. Love never fails."
                      </p>
                      <p style="margin: 0; font-size: 14px; font-weight: 600; color: #9f1239;">
                        — Mark 10:9 & 1 Corinthians 13:4-8
                      </p>
                    </div>
                    
                    <p style="margin: 0 0 32px 0; font-size: 16px; color: #4a5568; line-height: 1.8; text-align: center;">
                      Your marriage is an inspiration to our church family. Through your commitment to each other and to God, you show us what it means to walk in faith together, supporting one another through life's joys and challenges.
                    </p>
                    
                    <!-- Anniversary Milestone Badge -->
                    <div style="text-align: center; margin: 0 0 32px 0;">
                      <div style="display: inline-block; background: linear-gradient(135deg, #db2777 0%, #e11d48 100%); border-radius: 20px; padding: 24px 40px; box-shadow: 0 8px 20px rgba(219, 39, 119, 0.3);">
                        <div style="font-size: 48px; font-weight: 700; color: #ffffff; margin-bottom: 4px; line-height: 1;">{{YEARS_MARRIED}}</div>
                        <div style="font-size: 14px; font-weight: 600; color: rgba(255, 255, 255, 0.95); text-transform: uppercase; letter-spacing: 2px;">Years Together</div>
                      </div>
                    </div>
                    
                    
                   
                    
                    <!-- Call to Action -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 24px 0;">
                      <tr>
                        <td align="center">
                          <p style="margin: 0 0 20px 0; font-size: 15px; color: #4a5568; line-height: 1.6;">
                            We'd love to celebrate with you! Join us this Sunday for a special anniversary blessing.
                          </p>
                          <a href="{{CHURCH_WEBSITE}}" style="display: inline-block; background: linear-gradient(135deg, #db2777 0%, #e11d48 100%); color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; padding: 16px 40px; border-radius: 12px; box-shadow: 0 4px 16px rgba(219, 39, 119, 0.35);">
                            View Church Services 💒
                          </a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Fun Anniversary Facts -->
                    
                    
                    <!-- Closing Message -->
                    
                    
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
                    <a href="{{FACEBOOK_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <table role="presentation" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td align="center" valign="middle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#4a5568">
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="{{TWITTER_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <table role="presentation" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td align="center" valign="middle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#4a5568">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="{{INSTAGRAM_URL}}" style="display: inline-block; width: 36px; height: 36px; background-color: #ffffff; border-radius: 50%; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      <table role="presentation" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td align="center" valign="middle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </td>
                        </tr>
                      </table>
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
                <a href="{{PREFERENCES_URL}}" style="color: #9ca3af; text-decoration: underline;">Email Preferences</a> • 
                <a href="{{UNSUBSCRIBE_URL}}" style="color: #9ca3af; text-decoration: underline;">Unsubscribe</a>
              </p>
              
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>
`;
}