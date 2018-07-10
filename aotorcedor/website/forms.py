from django import forms
from django.contrib.auth.models import User
from aotorcedor.models import Torcedor
from django.contrib.auth.forms import UserCreationForm

class InsereTorcedor(forms.ModelForm):
    class Meta:

        model = Torcedor

        fields =['username', 'cpf', 'identidade', 'expedidor', 'cidade', 'email', 'estado', 'estado_civil', 'password']

        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control', 'maxlength':255}),
            'cpf': forms.NumberInput(attrs={'class': 'form-control', 'maxlength':11}),
            'identidade': forms.NumberInput(attrs={'class': 'form-control', 'maxlength': 11}),
            'expedidor': forms.TextInput(attrs={'class': 'form-control', 'maxlength': 11}),
            'cidade': forms.TextInput(attrs={'class': 'form-control', 'maxlength': 20}),
            'email': forms.EmailInput(attrs={'class': 'form-control', 'maxlength': 30}),
            'estado': forms.TextInput(attrs={'class': 'form-control', 'maxlength': 20}),
            'estado_civil': forms.TextInput(attrs={'class': 'form-control', 'maxlength': 20}),
            'password': forms.PasswordInput(attrs={'class': 'form-control', 'maxlength':16}),
        }
'''
    def save(self,commit=True):
        user = super(InsereTorcedor, self).save(commit=False)
        user.set_password(self.cleaned_data['password'])
        if commit:
            user.save()
        return user
'''
'''
class LoginForm(forms.Form):
    username = forms.CharField() Menu_userTemplateView
    password = forms.CharField(widget=forms.PasswordInput)
'''

class InfracaoForm(forms.ModelForm):

    data = forms.DateField(
        required=True,
        widget=forms.DateInput
    )

    local = forms.CharField(
        required=True,
        widget= forms.TextInput
    )

    descricao = forms.CharField(
        required=True,
        widget= forms.Textarea
    )
    selecao_infracao= forms.ChoiceField(
        required= True,
        widget= forms.Select
    )

    class Meta:
        model = Torcedor

        fields = ['username', 'cpf', 'identidade', 'expedidor', 'cidade', 'email', 'estado']