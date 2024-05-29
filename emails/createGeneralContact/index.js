module.exports = (lang, { name, subject, email, message, createdAt }) => {
  const t = require("./translations/" + lang || "en" + ".json")
  return {
    unsub: false,
    preview: t.subject,
    emailSubject: t.subject,
    content: `<p>${t["1"]}.</p>
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
        <p>Best regards,</p>
        <p><b>Batrec</b>, <b>B</b>ot <b>a</b>cknowledging and <b>t</b>ransferring <b>re</b>quests for <b>c</b>ontact, </p>
        <p>on behalf of IPSP.org</p>
        `,
    textContent: `${t["1"]}./r/n

        Subject:
        ${subject}

        From:
        ${name} - ${email}

        Date:
        ${createdAt}

        Message:/r/n
        ${message}

        Best regards,
        
        Batrec, Bot acknowledging and transferring requests for contact,
        on behalf of IPSP.org
        `,
  }
}
