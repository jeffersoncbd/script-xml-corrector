const snTag = '<ICMSSN102><orig>0</orig><CSOSN>102</CSOSN></ICMSSN102>'
const tag = '<ICMS00><orig>0</orig><CST>00</CST></ICMS00>'

for await (const file of Deno.readDir('./')) {
  if (file.name.includes('.xml')) {
    const body = Deno.readTextFileSync(`./${file.name}`)
    if (body.includes(snTag)) {
      Deno.writeFileSync(`./${file.name}`, new TextEncoder().encode(body.replaceAll(snTag, tag)))
    }
  }
}
