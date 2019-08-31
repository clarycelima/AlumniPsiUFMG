<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <router-link class="navbar-brand" to="/">Colaboratório <em>Alumni</em>PsiUFMG</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Página Inicial</router-link>
            </li>
            <b-nav-item-dropdown text="Dados" right>
                <b-dropdown-item to="/dados/script-lattes">Dados obtidos através do ScriptLattes</b-dropdown-item>
                <b-dropdown-item to="/dados/publicacoes">Registros de publicação</b-dropdown-item>
                <b-dropdown-item to="/dados/orientacoes">Registros de orientações</b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-item">
                <router-link class="nav-link" to="/downloads">Downloads</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/artigos">Artigos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/resultados">Resultados</router-link>
            </li>
            <b-nav-item-dropdown text="Redes" right>
                <b-dropdown-item to="/redes/artigos">Rede de artigos</b-dropdown-item>
                <b-dropdown-item to="/redes/artigos-fruchterman">Rede de artigos (algoritmo Fruchterman)</b-dropdown-item>
                <b-dropdown-item to="/redes/orientacoes">Laços Orientador Orientando</b-dropdown-item>
                <b-dropdown-item to="/redes/orientando-terceiros">Laços Orientador Orientando Terceiros</b-dropdown-item>
                <b-dropdown-item to="/redes/area-concentracao">Rede por área de concentração</b-dropdown-item>
<!--                <b-dropdown-item to="/redes/area-concentracao-force-atlas-2">Rede por área de concentração (Algoritmo Force Atlas 2)</b-dropdown-item>-->
                <b-dropdown-item to="/redes/completa">Rede de artigos + Orientações</b-dropdown-item>
            </b-nav-item-dropdown>
            <!--
            <li class="nav-item">
                <router-link class="nav-link" to="/redes">Redes</router-link>
            </li>-->
            <li class="nav-item">
                <router-link class="nav-link" to="/conheca">Conheça o Projeto</router-link>
            </li>
            <li class="nav-item ml-4">
                <a class="github" title="Ir para o repositório" target="_blank" href="https://github.com/clarycelima/AlumniPsiUFMG/tree/master"><svg height="36" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                <a target="_blank" href="https://github.com/clarycelima/AlumniPsiUFMG/tree/master" class="nav-link float-left">Visualizar repositório</a>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar{
    border-bottom: 4px solid darken($primary, 5);
    .nav-item > a.router-link-exact-active{
        color: white !important;
    }
    .github svg{
        fill: white !important;
        color: white !important;
    }
}
</style>


