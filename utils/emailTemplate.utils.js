export const generateTemplate = (username, verificationUrl) => {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4;padding:20px;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;padding:30px;border-radius:8px;font-family:Arial, sans-serif;">
        <tr>
          <td align="center" style="padding-bottom:20px;">
            <h2 style="color:#333333;margin:0;">Verify Your Email</h2>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:20px;color:#555555;font-size:16px;line-height:24px;">
            Hi <strong>${username}</strong>,<br><br>
            Thanks for signing up! Please click the button below to verify your email address and activate your account.
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:20px 0;">
            <a href="${verificationUrl}" target="_blank" style="background-color:#007BFF;color:#ffffff;padding:12px 24px;text-decoration:none;border-radius:5px;font-size:16px;">
              Verify Email
            </a>
          </td>
        </tr>
        <tr>
          <td style="color:#999999;font-size:12px;text-align:center;padding-top:20px;">
            If you didn’t create an account, no further action is required.
          </td>
        </tr>
        <tr>
          <td style="color:#cccccc;font-size:12px;text-align:center;padding-top:20px;">
            &copy; 2025 YourCompany. All rights reserved.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
};
