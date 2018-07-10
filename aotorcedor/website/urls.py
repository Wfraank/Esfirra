
from django.contrib.auth import views as auth_views
from website.views import IndexTemplateView, user_login, Saiba_maisTemplateView, Menu_userTemplateView, InfracaoCreateView, ProximosTemplateView
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

app_name = 'website'

# urlpatterns a lista de roteamentos de URLs para funções/Views
urlpatterns = [
    # GET /
    path('', IndexTemplateView.as_view(), name="index"),
    path('torcedor/cadastrar/', views.cadastro, name="cadastro_torcedor"),
    path('torcedor/login/', views.user_login, name="login"),
    path('torcedor/saiba_mais/', Saiba_maisTemplateView.as_view(), name="saiba_mais"),
    path('torcedor/menu_user/', Menu_userTemplateView.as_view(), name="menu_user"),
    path('torcedor/indicacao/', InfracaoCreateView.as_view(), name="indicacao"),
    path('torcedor/proximos/', ProximosTemplateView.as_view(), name="proximos"),



]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

