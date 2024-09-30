from django.http import JsonResponse
from .models import LadiesCategory, GentsCategory, Product, Event, Gallery

def ladies_category_list(request):
    ladies = LadiesCategory.objects.all()
    ladies_list = [{'name': lady.name, 'image': request.build_absolute_uri(lady.image.url)} for lady in ladies]
    return JsonResponse(ladies_list, safe=False)


def gents_category_list(request):
    gents = GentsCategory.objects.all()
    gents_list = [{'name': gent.name, 'image': request.build_absolute_uri(gent.image.url)} for gent in gents]
    return JsonResponse(gents_list, safe=False)

def product_list(request):
    products = Product.objects.all()
    product_list = [
        {
            'title': product.title,
            'information': product.information,
            'gender': product.get_gender_display(),  # Human-readable gender
            'category': product.category.name if product.category else None,
            'season': product.season,  # Include season information
            'image': request.build_absolute_uri(product.image.url),
            'is_soldout': product.is_soldout,  # Include soldout status
        }
        for product in products
    ]
    return JsonResponse(product_list, safe=False)



def event_list(request):
    events = Event.objects.all()
    events_list = [
        {
            'title': event.title,
            'date': event.date,
            'location': event.location,
            'image': request.build_absolute_uri(event.image.url),  # Construct absolute image URL
        }
        for event in events
    ]
    return JsonResponse(events_list, safe=False)




def gallery_list(request):
    galleries = Gallery.objects.all()
    gallery_list = [
        {
            'title': gallery.title,
            'image': request.build_absolute_uri(gallery.image.url),
        }
        for gallery in galleries
    ]
    return JsonResponse(gallery_list, safe=False)