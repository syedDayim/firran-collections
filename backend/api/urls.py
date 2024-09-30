from django.urls import path
from . import views

urlpatterns = [
    path('ladies/', views.ladies_category_list, name='ladies-category-list'),  # Updated view name
    path('gents/', views.gents_category_list, name='gents-category-list'),  # Updated view name
    path('products/', views.product_list, name='product-list'),
    path('events/', views.event_list, name='event-list'),
    path('gallery/', views.gallery_list, name='gallery-list'),
    # Add other API endpoints here
]
