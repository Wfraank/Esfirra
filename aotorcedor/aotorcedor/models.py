from django.db import models

# Create your models here.


class Torcedor(models.Model):

    nome = models.CharField(
        max_length=255,
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
        max_length=3,
        null=False,
        blank=False
    )

    objetos = models.Manager()
