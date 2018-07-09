
from django.contrib.auth import views as auth_views
from website.views import IndexTemplateView, TorcedorCreateView, user_login
from django.urls import path
from . import views


app_name = 'website'

# urlpatterns a lista de roteamentos de URLs para funções/Views
urlpatterns = [
    # GET /
    path('', IndexTemplateView.as_view(), name="index"),
    path('torcedor/cadastrar/', TorcedorCreateView.as_view(), name="cadastro_torcedor"),
    path('torcedor/login/', auth_views.login, name="login"),

]

