module.exports = (
  lang,
  {
    logo,
    domainName,
    name: projectName,
    pubId,
    key,
    contact: { firstname: firstName, lastname: lastName, entity },
  }
) => {
  const t = require("./translations/" + lang || "en" + ".json")
  return {
    logo,
    unsub: false,
    link: `https://${domainName}/edit/${pubId}/${key}`,
    preview: t["subject"],
    emailSubject: t["subject"],
    content: `<p>${t["dear"]} ${firstName} ${lastName},</p>
<p>${t["your_project"]} "${projectName}" ${t["has_been_correctly_uploaded_on_IPSP"]}. </p>
<p>${t["1"]}</p>
<table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
<tbody>
  <tr>
    <td align="center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
        <tbody>
          <tr>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="https://${domainName}/verify/${pubId}/${key}" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">${t["verify"]}</a> </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
<p>${t["2"]} ${entity} ${t["3"]}.</p>
<p>${t["4"]},</p>
<p><b>Bev</b>er<b>li</b>, <b>B</b>ot for <b>e</b>mail <b>ver</b>ification <b>li</b>nk,</p>
<p>${t["5"]}.</p>

<p><small>${t["6"]}.</small></p>`,
    textContent: `${t["dear"]} ${firstName} ${lastName},
  ${t["your_project"]} "${projectName}" ${t["has_been_correctly_uploaded_on_IPSP"]}.
  ${t["1"]}
https://${domainName}/verify/${pubId}/${key}

${t["2"]} ${entity} ${t["3"]}.
${t["4"]},
Beverli, Bot for email verification link,
${t["5"]}.

${t["6"]}.`,
  }
}
