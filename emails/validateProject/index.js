const html = require("../../../utils/html")

module.exports = (
  lang,
  {
    project: {
      contact: { firstname, lastname },
      pubId,
      key,
      name,
    },
    args: { content },
    logo,
  }
) => {
  const t = require("./translations/" + lang || "en" + ".json")
  return {
    logo,
    link: `https://TheSocioscope.org/edit/${pubId}/${key}`,
    unsub: true,
    content: `<p>${t["dear"]} ${firstname} ${lastname},</p>
          <p>${t["subject1"]} "${name}" ${t["subject3"]}.</p>
          ${content ? `<p>${t["1"]}:</p><p><i>${html(content)}</i></p>` : ""}
          <p>${t["3"]}</p>
          <p>${t["2"]}</p>
          <p>${t["4"]},</p>
          <p><b>Cesare</b>, <b>C</b>ommon <b>e</b>lectronic <b>s</b>ecretariat <b>a</b>gent of <b>re</b>ferents </p>
          <p>${t["5"]}</p>
          `,
    textContent: `${t["dear"]} ${firstname} ${lastname},
${t["subject1"]} "${name}" ${t["subject3"]}.

${
  content
    ? `${t["1"]}:

${html(content)} `
    : ""
}
${t["3"]}
${t["2"]}

${t["4"]},
Cesare, Common electronic secretariat agent of referents
${t["5"]}
          `,
    preview: `${t["subject1"]} "${name}" ${t["subject3"]}`,
    emailSubject: `${t["subject1"]} "${name}" ${t["subject3"]}.`,
  }
}
