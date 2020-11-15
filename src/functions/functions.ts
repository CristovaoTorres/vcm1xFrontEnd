import fetch from 'cross-fetch';
/* global  console, */

// var baseURL:string = "https://localhost:44383/api/"; 
var baseURL:string = "https://vcm1xwebapiaddin.azurewebsites.net/api/"; 

export async function http(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

/**
 * Adds two numbers.
 * @customfunction
 * @param {string}[posicao] V = Vertical, H = Horizontal
 * @returns The sum of the two numbers.
 */
export async function Projetos(posicao: string): Promise<string[][]> {

  //You can change this URL to any web request you want to work with.
  const url = baseURL+"Projeto/SpillDown?posicao="+posicao;
  console.log(url);

  const data = await http(url);
    return data;
}

/**
 *  Lista das topologias relacionadas ao projeto.
  * @customfunction 
  * @param {string} nomeProjeto Nome do Projeto
  * @param {string}[posicao] V = Vertical, H = Horizontal
  * @return Lista das topologias relacionadas ao projeto.
*/
export async function Topologias(nomeProjeto:string, posicao: string): Promise<string[][]> {
    //You can change this URL to any web request you want to work with.
    const url = baseURL+"Topologia/SpillDown/"+nomeProjeto+"?posicao="+posicao;
    
    const data = await http(url);
    return data;
  }

  
/**
  * Lista dos Cenarios relacionadas a Topologia.
  * @customfunction 
  * @param {string} projeto Nome do Projeto
  * @param {string} topologia  Nome da Topologia
  * @param {string} [posicao] V = Vertical, H = Horizontal
  * @return  Lista dos Cenarios relacionadas a Topologia.
  */
export async function Cenarios(projeto:string, topologia:string, posicao: string): Promise<string[][]> {
    
    const url = baseURL+"Cenario/SpillDown?nomeProjeto="+encodeURIComponent(projeto)+"&nomeTopologia="+
    encodeURIComponent(topologia)+"&posicao="+posicao;

    const data = await http(url);
    return data;
}

/**
  * Lista dos Simbolos de entrada
  * @customfunction 
  * @returns Lista dos Cenarios relacionadas a Topologia.
  */
 export async function SimbolosEntrada(): Promise<string[][]> {
    //You can change this URL to any web request you want to work with.
    const url = baseURL+"Simbolo/SpillDown/true";
    const data = await http(url);
return data;
}


/**
  * Lista dos Simbolos de Resultados
  * @customfunction 
  * @return  Simbolos
  */
 export async function SimbolosResultado():Promise<string[][]> {
    //You can change this URL to any web request you want to work with.
    const url = baseURL+"Simbolo/SpillDown/false";
    const data = await http(url);
  return data;
}



/**
  * Entrada
  * @customfunction 
  * @param {string} Projeto Nome do Projeto
  * @param {string} Topologia  Nome da Topologia
  * @param {string} Cenario  Nome do Cenario
  * @param {string} Simbolo simbolo
  * @param {string} [Entidade1] entidade1
  * @param {string} [Entidade2] entidade2
  * @param {string} [Entidade3] entidade3
  * @return Lista dos Cenarios relacionadas a Topologia.
  */
 export async function Entradas(Projeto:string, Topologia: string, Cenario: string, Simbolo: string,
  Entidade1:string,Entidade2: string, Entidade3: string): Promise<string[][]> {

    
var  entidades = "";
if(Entidade1 != null){
entidades = "&entidade1="+Entidade1;
}
if(Entidade2 != null){
entidades += "&entidade2="+Entidade2;
}

if(Entidade3 != null){
entidades += "&entidade3="+Entidade3;
}

const url = baseURL+"Entrada?nomeProjeto="+encodeURIComponent(Projeto)+"&nomeTopologia="+
encodeURIComponent(Topologia)+"&nomeCenario="+encodeURIComponent(Cenario)+"&nomeSimbolo="+Simbolo+entidades;

const data = await http(url);
return data;

}

/**
* Resultados
* @customfunction 
* @param {string} Projeto Nome do Projeto
* @param {string} Topologia  Nome da Topologia
* @param {string} Cenario  Nome do Cenario
* @param {string} Simbolo simbolo
* @param {string} [Entidade1] entidade1
* @param {string} [Entidade2] entidade2
* @param {string} [Entidade3] entidade3
* @return  Lista dos Cenarios relacionadas a Topologia.
*/
export async function Resultados(Projeto:string, Topologia: string, Cenario: string, Simbolo: string,
    Entidade1: string, Entidade2:string, Entidade3:string): Promise<string[][]> {

console.log("Entidade1:" + Entidade1)

var  entidades = "";
if(Entidade1 != null){
entidades = "&entidade1="+Entidade1;
}
if(Entidade2 != null){
entidades += "&entidade2="+Entidade2;
}

if(Entidade3 != null){
entidades += "&entidade3="+Entidade3;
}

const url = baseURL+"Resultado?nomeProjeto="+encodeURIComponent(Projeto)+"&nomeTopologia="+
encodeURIComponent(Topologia)+"&nomeCenario="+encodeURIComponent(Cenario)+"&nomeSimbolo="+Simbolo+entidades;
const data = await http(url);
return data;

}
