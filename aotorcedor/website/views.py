from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.views.generic import TemplateView, CreateView
from aotorcedor.models import Torcedor
from website.forms import InsereTorcedor, InfracaoForm
from django.views.decorators.http import require_POST


# Create your views here.

#HOMEPAGE
class IndexTemplateView(TemplateView):
  template_name = "website/index.html"


'''
class TorcedorCreateView(CreateView):
  template_name = "website/cadastro.html"
  model = Torcedor
  form_class = InsereTorcedor
  success_url =  reverse_lazy("website:index")
'''
#CADASTRO USUARIO
def cadastro(request):
  form = InsereTorcedor(request.POST or None)
  context = {'form':form}
  if request.method == 'POST':
    if form.is_valid():
      form.save()
  return render(request, 'website/cadastro.html', context)

'''
def user_login(request):
  if request.method == 'POST':
    form = LoginForm(request.POST)
    if form.is_valid():
      cd = form.cleaned_data
      user = authenticate(username=cd['username'],password=cd['password'])
      if user is not None:
        if user .is_active:
          login(request, user)
          return HttpResponse('Authenticated successfully')
        else:
          return HttpResponse('Disabled account')

      else:
        return HttpResponse('Invalid Login')

    else:
      form = LoginForm()

    return render(request, "website/login.html", {'form': form})
'''
#LOGIN USUARIO

def user_login(request):
  if request.method == 'POST':
    user = authenticate(username=request.POST['username'], password=request.POST['password'])
    if user is not None:
      login(request, user)
      return redirect("website:index")
  return render(request, "website/login.html")


#LOGOUT USUARIO
def user_logout(request):
  logout(request)
  return redirect("website:login")

#SAIBA MAIS
class Saiba_maisTemplateView(TemplateView):
  template_name = "website/saiba_mais.html"


class Menu_userTemplateView(TemplateView):
  template_name =  "website/menu_user.html"

class ProximosTemplateView(TemplateView):
  template_name =  "website/proximos.html"

class InfracaoCreateView(CreateView):
  template_name = "website/indicacao.html"
  model = Torcedor
  form_class = InfracaoForm
  success_url = reverse_lazy("website:menu_user")
