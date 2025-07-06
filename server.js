const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 设置静态文件目录（包含HTML和MP3文件）
app.use(express.static(path.join(__dirname, 'public')));

// 主路由返回HTML文件
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MP3文件路由
app.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    if (filename.endsWith('.mp3')) {
        res.sendFile(path.join(__dirname, 'public', filename));
    } else {
        res.status(404).send('File not found');
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
    console.log('请将HTML文件和MP3文件放在public目录下');
});