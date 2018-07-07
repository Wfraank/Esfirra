from django.db import models

# Create your models here.


class Torcedor(models.Model):

    ID = models.CharField(
        max_length=60,
        null=False,
        blank=False
    )

    email = models.CharField(
        max_length=60,
        null=False,
        blank=False
    )
 
    senha = models.CharField(
        max_length=25,
        null=False,
        blank=False
    )
 
    nome = models.CharField(
        max_length=255,
        null=False,
        blank=False
    )

    cidade = models.CharField(
        max_length=25,
        null=False,
        blank=False
    )

    estado = models.CharField(
        max_length=2,
        null=False,
        blank=False
    )
 
    cpf = models.CharField(
        max_length=14,
        null=False,
        blank=False
    )

    identidade = models.CharField(
        max_length=9,
        null=False,
        blank=False
    )

    expedidor = models.CharField(
        max_length=10,
        null=False,
        blank=False

    )

    nacionalidade = models.CharField(
        max_length=25,
        null=False,
        blank=False
    )

    estado_civil = models.CharField(
        max_length=25,
        null=False,
        blank=False
    )
 
    pontuacao = models.IntegerField(
        default=1000,
        null=False,
        blank=False
    )
 
    objetos = models.Manager()
