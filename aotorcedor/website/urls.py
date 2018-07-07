
from django.urls import path
from website.views import IndexTemplateView

app_name = 'website'

# urlpatterns a lista de roteamentos de URLs para funções/Views
urlpatterns = [
    # GET /
    path('', IndexTemplateView.as_view()),
]

