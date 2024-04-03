// 在页面加载完成后执行
window.onload = function() {
    // 获取所有class为"formButton"的按钮
    var buttons = document.querySelectorAll('button.formButton');
    // 选择第二个按钮(因为clone的原因)
    var finishButton = buttons[1];
    // 为"Finish"按钮添加点击事件监听器
    finishButton.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止按钮的默认行为
        // 获取所有的文本框
        var inputs = document.getElementsByTagName('input');
        // 创建一个新的PDF文档
        var doc = new jsPDF();
        // 经历所有的文本框
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type.toLowerCase() == 'text') {
                // 添加文本到PDF文档
                doc.text(inputs[i].id + ': ' + inputs[i].value, 10, 10 + i * 10);
            }
        }
        // 保存PDF文档
        doc.save('info.pdf');
    });
}