<template>
    <div class="rodape">
        <h4>AlumniPsiUFMG</h4>
        <p class="contato">Contato: <a href="@mailto:alumni.ufmg@gmail.com">alumni.ufmg@gmail.com</a></p>
        <div class="row justify-content-md-center">
            <div class="content col-md-auto">
                <div>
                    <!--<img src="@/assets/depsi-rodape.jpg" height="80" alt="">
                    <img src="@/assets/fafich-logo.jpg" height="80" alt="">
                    <img src="@/assets/ufmg-logo.jpg" height="80" alt="">-->
                    <img src="@/assets/logo-ppg-pis-ufmg.png" height="80" alt="">
                </div>
                <div><img src="@/assets/by-nc-sa.jpg" width="150" alt=""></div>
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
            }
        }
    }
</style>
