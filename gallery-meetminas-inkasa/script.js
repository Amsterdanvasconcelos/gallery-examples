const galleryItems = document.querySelectorAll('[data-gallery="gallery-item"]')
const modal = document.querySelector('[data-modal="modal"]')
const btnClose = document.querySelector('[data-modal="btn-close"]')
const sliderImg = document.querySelector('[data-modal="slider-img"]')
const sliderDescription = document.querySelector('[data-modal="slider-description"]')
const sliderNumber = document.querySelector('[data-modal="slider-number"]')
const thumbImgs = document.querySelectorAll('[data-modal="thumb-img"]')
const prevBtn = document.querySelector('[data-modal="prev-btn"]')
const nextBtn = document.querySelector('[data-modal="next-btn"]')

const gallery = [
	{
		img: "img/photo_0.png",
		description: "Conceição do Mato Dentro"
	},
	{
		img: "img/photo_1.png",
		description: "Diamantina"
	},
	{
		img: "img/photo_2.png",
		description: "Tiradentes"
	},
	{
		img: "img/photo_3.png",
		description: "São Lourenço"
	},
	{
		img: "img/photo_4.png",
		description: "Serro"
	},
	{
		img: "img/photo_5.png",
		description: "São Tomé das Letras"
	},
	{
		img: "img/photo_6.png",
		description: "Ipoema"
	},
	{
		img: "img/photo_7.png",
		description: "Ouro Preto"
	}
]

let counterIndex = 0

const openModal = () => modal.style.display = 'flex'

const closeModal = () => modal.style.display = 'none'

const getImgIndex = ({ target }) => {
    const arrFromChildren = Array.from(target.parentNode.children)
    const indexImg = arrFromChildren.indexOf(target)

	counterIndex = indexImg
    
    return indexImg
}

const thumbActive = (index) => {
    thumbImgs.forEach(img => {
        img.classList.remove('c-modal__thumb--active')
    })
    
    thumbImgs[index].classList.add('c-modal__thumb--active')
}

const updateModal = (index) => {
    sliderImg.src = gallery[index].img
    sliderDescription.textContent = gallery[index].description
    sliderNumber.textContent = (index + 1) + ' / ' + gallery.length

    thumbActive(index)
}

const prevImg = () => {
	if (--counterIndex < 0) {
		counterIndex = gallery.length - 1
	}
	updateModal(counterIndex)
}

const nextImg = () => {
	if (++counterIndex > gallery.length - 1) {
		counterIndex = 0
	}
	updateModal(counterIndex)
}

btnClose.addEventListener('click', closeModal)

galleryItems.forEach(item => {
    item.addEventListener('click', event => {
        const indexImg = getImgIndex(event)
        updateModal(indexImg)
        openModal()
    })
})

thumbImgs.forEach(img => {
    img.addEventListener('click', event => {
        const indexImg = getImgIndex(event)
        updateModal(indexImg)
    })
})

prevBtn.addEventListener('click', prevImg)
nextBtn.addEventListener('click', nextImg)