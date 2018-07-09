from django import forms
from django.contrib.auth.models import User
from aotorcedor.models import Torcedor

class InsereTorcedor(forms.ModelForm):
    class Meta:

        model = Torcedor

        fields =[
            'nome',
            'cpf',
            'identidade',
            'expedidor',
            'cidade',
            'email',
            'estado',
            'estado_civil',
            'senha'
        ]



class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

