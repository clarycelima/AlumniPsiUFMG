<template>
    <div>
        <cabecalho titulo="Produção Científica"/>
        <div class="container-fluid mb-4">
            <h4 class="mt-5 mb-3 text-center">Link da dissertação no Repositório UFMG</h4>
            <a class="text-center d-block" href="https://repositorio.ufmg.br/browse?type=author&value=Maria+Clarice+Lima+Batista&value_lang=pt_BR">
                https://repositorio.ufmg.br/browse?type=author&value=Maria+Clarice+Lima+Batista&value_lang=pt_BR
            </a>
            <h4 class="mt-5 mb-3 text-center">Download Direto</h4>
            <ul class="list-group col-md-4 mr-auto ml-auto">
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/DISSERTAÇÃO_MARIA CLARICE.pdf">Dissertação</a></li>
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/downloads/DISSERTAÇÃO_SLIDES.pdf">Dissertação (Slides)</a></li>
            </ul>
               
        </div>
    </div>    
</template>

<script>
import Cabecalho from '@/components/Cabecalho';
import BTable from 'bootstrap-vue/es/components/table/table'

export default {
    name: 'Repositorio',
    components: {Cabecalho, BTable}    
}
</script>

<style>

</style>
