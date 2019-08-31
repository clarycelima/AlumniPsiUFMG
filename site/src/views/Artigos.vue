<template>
    <div>
        <cabecalho titulo="Artigos"/>
        <div class="container mb-4">
            <ul class="list-group">
                <li class="list-group-item"><a target="blank" href="/AlumniPsiUFMG/artigos/artigo-rlars-2019.pdf">
                ANÁLISE DE REDES NA PRODUÇÃO CIENTÍFICA DA PSICOLOGIA DO BRASIL: aspectos da internacionalização
                </a></li>
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
