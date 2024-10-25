<template>
  <div class="RegistrarPage">
    <h1>Registrar</h1>
    <p>Crie seu cadastro grátis.</p>
    
    <!-- Cadastro -->
    <div class='cadastro'>
      <div class="input-group">
        <label for="nome">Nome completo</label>
        <input type="text" id="nome" required>
      </div>

      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" required>
      </div>

      <div class="input-group">
        <label for="senha">Senha</label>
        <input type="password" id="senha" required>
      </div>

      <div class="input-group">
        <label for="repetir-senha">Repetir senha</label>
        <input type="password" id="repetir-senha" required>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrarPage'
}
</script>

<style src="../assets/css/Registrar.css"></style>
