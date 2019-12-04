<template>
    <div class="rodape">
        <div class="container-fluid">
        <div class="row">
            <div class="col-auto">
                <div class="content col-md-auto">
                <div>
                    <!--<img src="@/assets/depsi-rodape.jpg" height="80" alt="">
                    <img src="@/assets/fafich-logo.jpg" height="80" alt="">
                    <img src="@/assets/ufmg-logo.jpg" height="80" alt="">-->
                    <img src="@/assets/logo-ppg-pis-ufmg.png" height="60" alt="">
                </div>
                <div><img src="@/assets/by-nc-sa.jpg" height="40" alt=""></div>
            </div>
        </div>
        <div class="col">
            
        <h4>Colaboratório <strong><em>AlumniPsiUFMG</em></strong></h4>
        <p class="contato" style="padding:0 0 5px 0; margin:0;">Contato: <a href="@mailto:clarycelima@gmail.com">Maria Clarice Lima Batista &lt;clarycelima@gmail.com&gt;</a></p>
        <p class="contato" style="padding:0 0 5px 0; margin:0;">Grupo de Pesquisa: <a href="@mailto:alumni.ufmg@gmail.com">alumni.ufmg@gmail.com</a></p>
        <p class="contato" style="padding:0 0 5px 0; margin:0;">Website: <a href="@mailto:tales.info@gmail.com">Tales Moreira &lt;tales.info@gmail.com&gt;</a></p>
        <div class="mt-2">
            <a class="github mr-1" title="Ir para o repositório" target="_blank" href="https://github.com/clarycelima/AlumniPsiUFMG/tree/master"><svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
            <a target="_blank" href="https://github.com/clarycelima/AlumniPsiUFMG/tree/master">Visualizar repositório de código</a>
        </div>
        <!--<div class="row justify-content-md-center">
            
        </div>-->
        </div>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
    .rodape{
        border-top: 5px solid darken($primary, 5);
        background: $primary;
        color: lighten($primary, 40);
        text-align: center;
        padding: 20px;
        a{
            color: lighten($primary, 30);
        }
        .content{
            background: white;
            border-radius: .5rem;
            padding: 10px 40px;
            .info{
                font-weight: lighter;
            }
            .contato{
                font-weight: bold;
                margin-bottom:0;
            }
        }
    }
    
    .github svg{
        fill: white !important;
        color: white !important;
    }
</style>
