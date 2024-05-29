module.exports = (
  lang,
  {
    name,
    projectName,
    pubId,
    key,
    subject,
    email,
    message,
    createdAt,
    contact: { firstname: firstName, lastname: lastName },
  }
) => {
  const t = require("./translations/" + lang || "en" + ".json")
  return {
    unsub: true,
    link: `https://IPSP.org/edit/${pubId}/${key}`,
    preview: t.preview,
    emailSubject: `${t.subject} "${projectName}"`,
    content: `<p>${t["dear"]} ${firstName} ${lastName},</p>
        <p>${t["1"]} "${projectName}" (IPSP-${pubId}) - url: https://IPSP.org/item/${pubId} ${t["2"]}</p>
        <br>
        <p style="color:#333333"><small>Subject: </small></p>
        <p>${subject}</p>
        <p style="color:#333333"><small>From:</small></p>
        <p>${name} - ${email}</p>
        <p style="color:#333333"><small>Date:</small></p>
        <p>${createdAt}</p>
        <p style="color:#333333"><small>Message:</small></p>
        <p><i>${message}</i></p>
        <br>
        <p>${t["3"]}</p>
        <p>${t["4"]} </p>
        <br>
        <p>${t["5"]},</p>
        <p><b>Batrec</b>, <b>B</b>ot <b>a</b>cknowledging and <b>t</b>ransferring <b>re</b>quests for <b>c</b>ontact, </p>
        <p>${t["6"]}</p>
        `,
    textContent: `Dear ${firstName} ${lastName},/r/n
        ${t["1"]} "${name}" (IPSP-${pubId}) - url: https://IPSP.org/item/${pubId} ${t["2"]}/r/n

        Subject:
        ${subject}

        From:
        ${name} - ${email}

        Date:
        ${createdAt}

        Message:/r/n
        ${message}
        
        ${t["3"]}

        ${t["4"]}
        
        ${t["5"]},
        
        Batrec, Bot acknowledging and transferring requests for contact,
        ${t["6"]}
        `,
  }
}
