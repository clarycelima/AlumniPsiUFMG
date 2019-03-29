<template>
    <div class="rodape">
        <h4>Alumni Psi UFMG</h4>
        <p class="info">+ informações....</p>
        <p class="contato">Contato: <a href="@mailto:admin@site.com.br">admin@site.com.br</a></p>
        <div class="row justify-content-md-center">
            <div class="content col-md-auto">
                <div>
                    <img src="@/assets/depsi-rodape.jpg" height="80" alt="">
                    <img src="@/assets/fafich-logo.jpg" height="80" alt="">
                    <img src="@/assets/ufmg-logo.jpg" height="80" alt="">
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
            padding: 10px;
            .info{
                font-weight: lighter;
            }
            .contato{
                font-weight: bold;
            }
        }
    }
</style>
