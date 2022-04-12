const ml = document.getElementById("ml")
const ma = document.getElementById("ma")
const p = document.getElementById("p")
const pl = document.getElementById("pl")
const pa = document.getElementById("pa")
const j = document.getElementById("j")
const jl = document.getElementById("jl")
const ja = document.getElementById("ja")
const bt1 = document.getElementById("bt1")
const bt2 = document.getElementById("bt2")
const r = document.getElementById("resp")

bt2.addEventListener('click', limpar);
function limpar(){
    ml.value = "";
    ma.value= "";
    p.value= "";
    pl.value= "";
    pa.value= "";
    j.value= "";
    jl.value= "";
    ja.value= "";
    r.value= "";
}

bt1.addEventListener('click', () => {
    let mlar = Number(ml.value);
    let mal = Number(ma.value);
    let por = Number(p.value);
    let plar = Number(pl.value);
    let pal = Number(pa.value);
    let jan = Number(j.value);
    let jlar = Number(jl.value);
    let jal = Number(ja.value);

    let aream = (mlar* mal);
    let tp = por* (plar* pal);
    let tj = jan* (jlar* jal);
    let mf = aream- (tp+ tj);
    
// provavelmente aqui virá uns if para tomar a decisão de qual lata de tinta comprar!!

    r.innerHTML = `<p> Média Final: ${mf} </p>`



});
