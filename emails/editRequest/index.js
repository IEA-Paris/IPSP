const html = require("../../../utils/html")

module.exports = (
  lang,
  {
    project: {
      // contact: {
      //   firstname,
      //   lastname,
      // },
      // pubId,
      // key,
      name,
    },
    args: { content },
    link,
    logo,
  }
) => {
  const t = require("./translations/" + lang || "en" + ".json")
  return {
    logo,
    link,
    unsub: true,
    content: `<i>${html(content)}</i>
  <hr>
  <p>${t["1"]}</p >
  <p>${t["2"]} <a href="${link}" target="_blank">${t["3"]}</a>.</p>
  <p>${t["4"]}</p>
  <p>${t["5"]}</p>
  <p>${t["6"]},</p>
  <p><b>Cesare</b>, <b>C</b>ommon <b>e</b>lectronic <b>s</b>ecretariat <b>a</b>gent of <b>re</b>ferents</p>
  <p>${t["7"]}</p>
  `,
    textContent: `${content}
  ${t["1"]}

  ${t["2"]} ${t["3"]}: ${link}
  ${t["4"]}

  ${t["5"]}

  ${t["6"]},
    Cesare, Common electronic secretariat agent of referents
  ${t["7"]}
    `,
    emailSubject: `${t.subject} "${name}"`,
    preview: `${t.subject} "${name}"`,
  }
}
