<template>
    <div>
        <cabecalho titulo="Downloads"/>
        <div class="container mb-4">
            <ul class="list-group">
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Egressos de Doutorado e Orientadores.docx">Egressos de Doutorado e Orientadores</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Instituições de Colaboração em Minas Gerais.docx">Instituições de Colaboração em Minas Gerais</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Instituições de Colaboração.docx">Instituições de Colaboração</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Instituições Editoras dos Periodicos.docx">Instituições Editoras dos Periodicos</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Lista Autores.docx">Lista Autores</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Periodicos em Ordem Alfabetica.docx">Periodicos em Ordem Alfabetica</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Periódicos Estrangeiros.docx">Periódicos Estrangeiros</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Periódicos Ordem por Quantidade Artigos.docx">Periódicos Ordem por Quantidade Artigos</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/Titulados Doutorado Psicologia.pdf">Titulados Doutorado Psicologia</a></li>
            </ul>
               
        </div>
    </div>    
</template>

<script>
import Cabecalho from '@/components/Cabecalho';
import BTable from 'bootstrap-vue/es/components/table/table'

export default {
    name: 'Downloads',
    components: {Cabecalho, BTable}    
}
</script>

<style>

</style>
