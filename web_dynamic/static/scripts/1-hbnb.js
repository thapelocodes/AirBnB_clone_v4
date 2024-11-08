$(document).ready(init);

function init () {
  const amenityDict = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenityDict[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenityDict[$(this).attr('data-name')];
    }
    const names = Object.keys(amenityDict);
    $('.amenities h4').text(names.sort().join(', '));
  });
}
