<template>
  <div>
    <cabecalho titulo="" descricao-primaria="Produção científica dos egressos da psicologia: Redes de colaboração e domínios científicos" descricao-secundaria="" :conheca="true"/>
    <div class="home container text-justify">
      <p><em><Strong>Alumni</Strong></em> é a forma pluralizada de alumnus (egresso, ex-aluno). A palavra tem origem no Latim e tem entre suas acepções a ideia de "filho que é dado a cuidado de outro", referindo-se, em uma interpretação mais romântica, ao indivíduo que é "alimentado com conhecimento". </p>
<p>O site tem a proposta de ser um colaboratório para a comunidade de estudiosos e grupos de pesquisa sobre egressos. </p>
<p>No <strong>Colaboratório <em>Alumni</em>PsiUFMG</Strong> poderão ser armazenados dados de pesquisa e mapas que, por estarem em escala de grande dimensão, ilegível em publicação impressa ou em formatos de arquivo, no Colaboratório poderão ser consultados permitindo, com o mouse, localizar os clusters e atores de interesse. </p>
<p>Outros materiais derivados de trabalhos do grupo de pesquisa <Strong><em>ALUMNI</em>UFMG</Strong>, assim como de outros grupos de estudo de Egressos dentro e fora da instituição, poderão ser armazenados e compartilhados tornando-se um repositório de dados de acesso aberto com intenção de trabalho colaborativo. </p>
<p>Os mapas de visualização ou de clusters em grande escala, publicados em material bibliográfico, sempre esbarram na dificuldade de se visualizar os detalhes e, certamente, por estar em formato estático, impossibilita manuseio e navegação em seu conteúdo. O GitHub, a partir da ferramenta Git, permite a disponibilização e compartilhamento de materiais e dados produzidos em pesquisas, em forma de repositório. </p>


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
