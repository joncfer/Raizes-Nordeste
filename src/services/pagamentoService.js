const processarPagamento = async (valor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.1; // 90% de chance de sucesso
      if (sucesso) {
        resolve({ status: 'APROVADO', transacaoId: Date.now() });
      } else {
        reject(new Error('Falha no gateway de pagamento externo'));
      }
    }, 1000);
  });
};

module.exports = { processarPagamento };

