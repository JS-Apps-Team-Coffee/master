/**
 * Created by Goran on 9/2/2015.
 */
function cartProductTemplate(){
    var result = "<tr>"+
        "<td class='text-center'>"+
    "</td>"+
    "<td class='text-left' data-info='title'>{{getTitle this}}"+
    "</td>"+
    "<td class='text-right'>{{getPrice this}}</td>"+
    "<td class='text-center'>"+
    "<button type='button' data-info='remove' title='Remove' class='btn btn-danger btn-xs'><i class='fa fa-times'></i>"+
    "</button>"+
    "</td>"+
    "</tr>"
    return result;
}
export default{cartProductTemplate}