module.exports = ({
  logo,
  profile: { firstname: firstName, lastname: lastName },
  link,
}) => ({
  logo,
  unsub: false,
  preview: "You have been invited to be a TheSocioscope referent",
  emailSubject: "You have been invited to be a TheSocioscope referent",
  content: `<p>Dear ${firstName} ${lastName},</p>
  <p>We are happy to inform you that you have been selected and invited to be a TheSocioscope referent.</p>
  <p>Please click on the link below to define your password and join us on TheSocioscope for referents.</p>
  <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
  <tbody>
    <tr>
      <td align="center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
          <tbody>
            <tr>
              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="${link}" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Create your TheSocioscope referent account</a> </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>    
  <p>We hope to see you soon!</p>
  <p><b>Cesare</b>, <b>C</b>ommon <b>e</b>lectronic <b>s</b>ecretariate <b>a</b>gent of <b>re</b>ferents </p>
  <p>on behalf of TheSociosciope.org.</p>`,
  textContent: `Dear ${firstName} ${lastName},
  We are happy to inform you that you have been selected and invited to be a TheSocioscope referent.
  Please click on the link below to define your password and join us on TheSocioscope for referents.
  ${link} 
  We hope to see you soon!
  Cesare, Common electronic secretariate agent of referents
  on behalf of TheSociosciope.org
  `,
})
