
const deleteText = document.querySelectorAll('.fa-trash')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteBill)
})
async function deleteBill(){
    const bName = this.parentNode.childNodes[1].innerText
    // const bName = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteBill', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'billNameS': bName
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}