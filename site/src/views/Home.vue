<template>
  <div>
    <cabecalho titulo="AlumniPsiUFMG" descricao-primaria="" descricao-secundaria="TEXTO SOBRE O PROJETO" :conheca="true"/>
    <div class="home container text-justify">
      <h2>Grupo de pesquisa Alumni - Grupo interdisciplinar de estudos e pesquisas sobre carreira e egressos</h2>
        
      <p class="text-center">
        <a href="https://alumniufmg.blogspot.com" target="blank"><img src="@/assets/alumni.png" alt="" height="80"></a>
        <a href="http://dgp.cnpq.br/dgp/espelhogrupo/267623" target="blank"><img src="@/assets/diretorio_grupos.png" alt="" height="80"></a>
      </p>
      
      <p>Alumni, termo utilizado para nomear o grupo, é a forma pluralizada de alumnus (egresso, ex-aluno), palavra de origem latina que tinha o significado de “filho que é dado a cuidado de outro”, referindo-se, em uma interpretação mais romântica, ao indivíduo que é “alimentado com conhecimento”. O grupo tem por objetivo desenvolver estudos que se organizam a partir de dois eixos: 1) pesquisas com os egressos dos Programas de Graduação e Pós-Graduação da Universidade Federal de Minas Gerais (UFMG); 2) pesquisas psicossociais sobre as carreiras profissionais e acadêmicas. O acompanhamento dos egressos, além de manter aberto o contato com este segmento, proporcionando conhecimento sobre as trajetórias, atuação e inserção no mercado, permite levantar informações para a (re)elaboração dos cursos e suas políticas educacionais, uma vez que os indicadores sobre a atuação ocupacional dos egressos são um dos novos critérios de avaliação adotado pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES). Entende-se que se aproximar dos egressos é pesquisar sobre as suas carreiras, considerando, não obstante, o desenvolvimento de competências propiciadas pela experiência da graduação/pós-graduação, na insterseccionalidade com aspectos da cultura e da produção de subjetividades e geração de conhecimento.</p><br/>
      <h4>Linhas de pesquisa:</h4> 
      <ul>
        <li>Pesquisas com os egressos</li> 
        <li>Pesquisas psicossociais sobre as carreiras</li> 
      </ul>
      <p><strong>Coordenador do grupo: </strong> Dias Cirino</p>
      <p><strong>Área predominante:</strong> Ciências Humanas; Psicologia</p>
      <p><strong>Instituição do grupo:</strong> Universidade Federal de Minas Gerais</p>
      <p><strong>Unidade:</strong> Faculdade de Filosofia e Ciências Humanas, Departamento de Psicologia</p>
      <p><strong>Contato do grupo:</strong> alumni.ufmg@gmail.com</p>
      <br/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cabecalho from '@/components/Cabecalho'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Cabecalho
  }
}
</script>
