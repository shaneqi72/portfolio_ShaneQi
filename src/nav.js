const openNav = () => {
    document.getElementById('sidePanel').style.display = 'flex'
    document.getElementById('hamburger').style.display = 'none'
}

const closeNav = () => {
    document.getElementById('sidePanel').style.display = 'none'
    document.getElementById('hamburger').style.display = 'flex'
}
