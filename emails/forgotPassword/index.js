module.exports = (
  { contact: { firstname: firstName, lastname: lastName }, link, logo },
  lang = "en"
) => {
  const t = require("./translations/" + lang + ".json")
  return {
    logo,
    unsub: false,
    preview: t.subject,
    emailSubject: t.subject,
    content: `<p>${t["dear"]} ${firstName} ${lastName},</p>
  <p>${t["1"]}.</p>
  <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
  <tbody>
    <tr>
      <td align="center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
          <tbody>
            <tr>
              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="${link}" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">${t["change-my-password"]}</a> </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>    
  <p>${t["contact"]} referents@IPSP.org ${t["to-report-it"]}.</p>
  <p><b>Cesare</b>, <b>C</b>ommon <b>e</b>lectronic <b>s</b>ecretariate <b>a</b>gent of <b>re</b>ferents </p>
  <p>${t["1"]}.</p>`,
    textContent: `${t["dear"]} ${firstName} ${lastName},
${t["2"]}.
${link} 
${t["contact"]} referents@IPSP.org ${t["to-report-it"]}.
Cesare, Common electronic secretariate agent of referents
${t["2"]}
`,
  }
}
