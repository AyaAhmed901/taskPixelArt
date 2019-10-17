// Select color input
// Select size input
var color ;
var height, width;


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    
    height=$('#inputHeight').val();
    width=$('#inputWidth').val();
    
    makeGrid(height,width);
    event.preventDefault();
    });

function makeGrid(x,y) {
  // Your code goes here!
  $('tr').remove();
  
  for( var i=1; i<=x ; i++)
  {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for(var j=1; j<=y ;j++)
    {
       $('#table'+i).append('<td></td>');
    }
  }
  
  $('td').click(function addColor(){
      color=$('#colorPicker').val();
      if($('this').attr('style'))
      {
          $(this).removeAttr('style');
      }else
      {
          $(this).attr('style','background-color:'+ color);
      }
    });
    
}

