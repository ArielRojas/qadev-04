/**
 * Created by ArielWagner on 21/09/2015.
 */
/**
 *
 * @param size
 * @param text
 */
var drawTable = function(size, text){
    var table = $('<table border="1" WIDTH="50%"></table>');

    for(var i = 0; i< size; i++){
        var row = createRow();
        for(var j=0; j< size;j++){
            row.append(createCell(text));
        }
        table.append(row);
    }
    //$('body').text('');
    //$('body')..append(table);
    $('body').text('').append(table);
};
/**
 *
 * @returns {*|jQuery|HTMLElement}
 */
var createRow = function(){
    var row = $('<tr></tr>')
    return row;
};
/**
 *
 * @param text
 * @returns {*|jQuery|HTMLElement}
 */
var createCell = function(text){
    var cell = $('<td>' + text + '</td>');
    return cell;
};
/**
 *
 */
var attachListeners = function(){
    $('td').on('click', function(){
        console.log('cell clicked!!!', arguments);
    });
    /*
     $(document).on('click', function(){
     console.log('cell clicked!!!', event.target);
     });
     */
};
/**
 *
 * @param newT
 */
var changeText = function(newText) {
    $('td').on('click', function(event){
        console.log('change text', event.target);
        $(this).text(newText);
        $(this)[0].style['background-color'] = 'red';
        $(this).off('click');
        $(this).off('mouseout');
        $(this).off('mouseover');
    });
    $('td').on('mouseover',function(e) {
        console.log('On mouseover');
        $(this)[0].style['background-color'] = 'yellow';
    });
    $('td').on('On mouseout', function(e) {
        console.log('mouseout');
        $(this)[0].style['background-color'] = '#009926';
        //$(this).css('background-color', '#FFEC9E');
    });
};