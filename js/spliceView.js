const splideList = document.querySelector('.splide__list')
const source = [
    {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/oSmKudwnkPkhtZGj88Gq0Q1kO32HT6TjC1a64eGs-uqHyhYwmuzg4xXQilUvxMOvaK8tqPL5ekeM9vpr7CXlqBh9n7zljzW7ntKMz-BDc0zfEmJ3uNnALyaVdcl2DWAE9jd515RPhPEBUFgrrndpG9plD9HCKV1yjqs1y5toAvwbo82LKnHo8oRloha1cgADqQJfv4din5DEwuqdG-NbiobSSwMrRSHBJZyXV76INm6R4O43oOvuM4kygXbMg9kl82Fe3ndSYuNVTT00rwBnOQxVEFRoSsFFFm294okQWXBnwJLcpR5eTWWVf1oPm-r0cZAmnqHeDtFpBQhybWzLIP9iPJX8a9uOytp9jRmR5SdyuGJ4TNvH53LRjb8aPjqdsnoUnARtDeQH_mW_hDVipRvCQxD4ZhBVESiYdlc7rEJ6piGVOP7k4Wvp8Gd7qqN864i1-9uMYb__ywa0tav2mNtzmb0CZGoPnvlVRyJnoKXjP9eHrmG24XBiirpnTycVzmBegAxvS42XafjfwI8PQQDc3xy4MR6-XuN6AD8ybcr2CfGHjakIm_mufe9qpfo-aILUz2eArHR0RSKo5nQ0lzrh1zo-ZGEfTTQPv9A1ij4acYvycyGzRlBoHdDaidhlI-18JxRcEDI3j7w0k7dxMa4BPCGV63_1zaNYbBv-zQ3sggo-c4hNP_LQ5yakbDyNcR8zjPXrf513B1cMGYKF6diC4wilQd9dAtGCrigNHbr1MV5gdFXI8zHI6_xi_oPHcY8lbZIHX-qTj9EqcpbP3qvEtEAlv9eAoLvIakvSPQR5oaGPBv0GEha7v3X0hoFFBSBd4VU4Oxj9OyNjM4JwBYnDmrJvfn8827qFA_QKmW1bRcQYttRmGS677yvncoTOx2jqifNppMxNFg9T-FtnZlYF9apOpdQYW_wZ5z3yHQl-NcEwzJEggyUhYN-ase3dZyzfcwdSleGnf3vS-Vk8SOrmdKiv_ayG1sATwDwphnj_2PWveDq4N1jVdA=w823-h617-no?authuser=0'
    },
    {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/RRq_2uUSnT41b2seFnpzLkDPCuopnfEA53VWXv3Weyl_xicgg16_5K-M44NcLr5BIsjjOEbaPtb8A6GjJXjPEjtYWJ9_QNYTemxjDH5_Pi0dNHuz26xs0HI5uJI_MutyCIJdTFauqHHffVF2e979A3y8si6G3SV5cGZk627PWNMSFo67-DuG0FIIT6pEKSXMxXBLAXx2reUupoOga32DE34Yti8NpaErDe9xkjUqZJ_x2A4PBLQiiRJ7zp8T9G8sus2f1QSCatyuGI7ABN47dIqcHEo6I1M2LhCwTP6nr5AZ1SbRPEQwKAUUGltjFsCzZmYZLyjPgR8-yL3f1L76doKnRYTHPoemIDoc4Ynag67eqZypANtWDcyOguGmtjPHkf0Zt439oaiHGZ2_kq0JhZmf3amIarpYgvVpI-b8p2vGCLhQmjJYviIfxWwASCE4e11shLVdi9H8Xw3OV5SCGZhXywVNM4U94ROpVqb9WF8EPrS8zZEO9KwGIvxnw4aEk89Zfpvvbeygb5__qR8lSoc4mcnVshUUGZ6fIZtDHeKnAvf9wSq_NEBqwM6E7H5CPe0My698uMpKX9yM_4_ZaXy2GI2GAGzVg8UJi5dJrYc1KI3WCq7L0b-yc9BwSj2UAxyfafdvGYTZbqsjXS4kmxAY8v5CWODaG8F5IaoC4dtZVrqXkHU4NzGzaztSVcRRlll-vEYWTVRwH2HkjGznNzRCQ7UcGhBVy-V6SD9wm8A70-hoYZcEn-1yvIq33aLCljDxJl_hN7xr-ZcbGKESx8MGIrFd4JuJ4632cehu0xpubSax493t46f_IzvyV4s4Z1SWNXjzqyo2XVSbYwZ1ETTsCYN-OKsQEe0rBNErUFstCqnyUo6fu61JQIkWa1p7FeZCxFK0nHbDUlG3HY2sgdcS1z6OesEm8yIFcVP8qiYWY7x1-_UfX-ePT2K2O9R81ujsH5DYdho2a9ezk8W7uC3uuykrFDiYrTaXyL8rg5iN6ngPNagRsrVcHQ=w648-h617-no?authuser=00'
    },
    {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/AQ3lMEBbHDNkRkOBM66C9royzrs4YGDAuWHpLXUmYshTYEdWhmwFd2JyJcHNlisGs03tsbVntRKZ3iIXNru8GKtos9Z4RFjBUfZvlJPUsEJVN15CfWasb_5A37IQxe_ZFBJcRyoNb3e7Y0DracheEs1OdJlFMHOLlUDdwx2GLJ00glBmxIGZXt-ow_rQkBdLxbtZfglwTQrJmGRr7ye-jMt_Bj6EEPA0wy0Cbde1t5oMIFmQy3IUFK9Jt8OB3WssFD_CC5tYPv1g0wlRk7SLKWg5m6yraNMMO2f6TyeknayJwTYxzmemFdhRQPxe5pUI1Ena5tGpHYMNOqUPdr7OV4Wuc1Cf87K0k9xkhVLjo-2ooIK9E5CRbWb1psLRCY-SRKuBncJN0coL7mLZOeu1V3_xRRxtpooXHWa6LHCd8e20WIEb7Sx50-CUPZTJRY7CL3yY61byFy4bZf7vbsSFZ7Ur6m9PirXvWG_shamvt80kxteXoQVhLojF89DTDDGIL462aZI-TEh3A19oJC_JXWZSoAu82tDjSkdSLy8QxIvigBDkyASyCdbXgp0q8de1OXFi79QNkv4dzyiQB5-ZqHSYUY9B4FmlD-82KJ_yygLCfUrtocrc3NIhjAN5SPfifszfT_fXbiKLc-EunRoYz0m5UtyMcYclVxnTwkb_9zPDMNdGQwPb5DRnLOpuELXDzn8h1N_cOlcy0DR2DIC3lLb9xkZvVfsAM6Jx5Qe_aFbUHMesDk67leQ5-68SABN7oDKY2s3h75stChg3nVQ72njxoRRdetOsPrcMQoTee_zxkkaz2vqrWem4nlH8AoCvH6P_wL46rI6jHgcJzm7tAhOnQaXVzLMHkOhpnf58Bf-805uGctr0wgbnf5LeNpfbXHDNH4JjYodYW7jSvE9srOMC8SqVgpokMV2QnPVv5m9HcIzyMqv8hXfrccCzehe0g2Q95O3LTSJrkLLGi14Oo7XPiy1kNj9EIZFY6ipjAKeO-ph6Bb0WbP9TCA=w1097-h617-no?authuser=0'
    },
    {
        type: 'video',
        src: 'https://photos.app.goo.gl/HeQ65HbmjkvbJ1FE8'
    },
]

for (let i = 0; i < source.length; i++) {
    let li = document.createElement('li')
    li.className = 'splide__slide'
    li.dataSplideInterval = 1000

    if (source[i].type === 'image') {
        let img = document.createElement('img')
        img.className = 'splide__img'
        img.src = source[i].src
        li.appendChild(img)
    }
    else {
        let video = document.createElement('video')
        video.className = 'splide__img'
        video.controls = true
        video.src = source[i].src
        li.appendChild(video)
    }
    splideList.appendChild(li)
}

const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 1,
    autoplay: true,
    direction: 'ttb',
    height: '10%' 
});

splide.on('autoplay:playing', function (rate) {
    // console.log( rate ); // 0-1
});

splide.mount();