$(document).ready(function () {

  // click event
    $("#randomize").click((event) => {
      event.preventDefault()
      console.log('selecting color')
      colors()
    })
  // end click event

  // colors function
    function colors() {
      const url = "https://css-colors-api.herokuapp.com/api/v1/colors/random"

        // making API request using AJAX
      $.ajax({
        url: url,
        type: "GET",
        data: {}
      })
      .done((response) => {
        // execute this function if request is successful
        console.log(response)
        console.log(response.name)
        console.log(response.hexcode)

        changeColor(response)

      })
      .fail(() => {
        // execute this function if request fails
        alert('error occurred')
      })
    }
  // end colors function

  // action function... this changes the colors
function changeColor(color) {

// update text
$('.color-name').html(color.name)
$('.color-hex').html(color.hexcode)

let newBackgroundColor = color.hexcode

// update circle
$('.circle').css('background-color', newBackgroundColor)

}

  // end action function

})
