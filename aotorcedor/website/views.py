from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.urls import reverse_lazy
from django.views.generic import TemplateView, CreateView
from aotorcedor.models import Torcedor
from website.forms import InsereTorcedor, LoginForm


# Create your views here.


class IndexTemplateView(TemplateView):
  template_name = "website/index.html"



class TorcedorCreateView(CreateView):
  template_name = "website/cadastro.html"
  model = Torcedor
  form_class = InsereTorcedor
  success_url =  reverse_lazy("website:index")


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



