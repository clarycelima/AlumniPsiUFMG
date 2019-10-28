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
</style>
