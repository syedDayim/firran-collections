from django.db import models

# Ladies Category models
class LadiesCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='ladies_images/')

    def __str__(self):
        return self.name

        
# Gents Category Model
class GentsCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='gents_images/')

    def __str__(self):
        return self.name



# Product Model      
class Product(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]

    SEASON_CHOICES = [
        ('summer', 'Summer'),
        ('winter', 'Winter'),
        ('autumn', 'Autumn'),
        ('spring', 'Spring'),
    ]

    title = models.CharField(max_length=200)
    information = models.TextField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    season = models.CharField(max_length=20, choices=SEASON_CHOICES)
    category = models.ForeignKey(
        LadiesCategory, 
        on_delete=models.CASCADE, 
        null=True, 
        blank=True
    )
    image = models.ImageField(upload_to='product_images/')
    is_soldout = models.BooleanField(default=False)  # New field

    def __str__(self):
        return self.title



# Events Model
class Event(models.Model):
    title = models.CharField(max_length=200)  # 'World Biggest Business Conf. 2024'
    date = models.CharField(max_length=50)  # '25 SEP, 2024' - You can change to DateField if preferred
    location = models.CharField(max_length=255)  # '21 King Street, 1175 Australia'
    image = models.ImageField(upload_to='events_images/')  # Image upload path

    def __str__(self):
        return self.title

# Gallery Model
class Gallery(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='gallery_images/')

    def __str__(self):
        return self.title


