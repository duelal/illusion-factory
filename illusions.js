// 錯視のデータベース
const illusions = [
    {
        name: "ミュラー・リヤー錯視",
        description: "両端の矢羽の向きにより、同じ長さの線が異なる長さに見える錯視です。",
        draw: drawMullerLyer
    },
    {
        name: "エビングハウス錯視",
        description: "周囲の円の大きさにより、中央の同じ大きさの円が異なる大きさに見える錯視です。",
        draw: drawEbbinghaus
    },
    {
        name: "ヘルマン格子錯視",
        description: "白い交差点に灰色の点が見えますが、実際には存在しません。",
        draw: drawHermannGrid
    },
    {
        name: "ツェルナー錯視",
        description: "平行な線が斜めの短い線により、傾いて見える錯視です。",
        draw: drawZollner
    },
    {
        name: "カフェウォール錯視",
        description: "実際には平行な線が波打って見える錯視です。",
        draw: drawCafeWall
    },
    {
        name: "ポンゾ錯視",
        description: "遠近法により、同じ長さの線が異なる長さに見える錯視です。",
        draw: drawPonzo
    },
    {
        name: "渦巻き錯視（フレーザー錯視）",
        description: "実際には同心円ですが、渦巻きのように見える錯視です。",
        draw: drawSpiral
    },
    {
        name: "ペンローズの三角形",
        description: "3次元では存在不可能な図形です。",
        draw: drawPenrose
    },
    {
        name: "回転する蛇",
        description: "静止画なのに回転して見える動きの錯視です。",
        draw: drawRotatingSnakes
    },
    {
        name: "白の錯視",
        description: "灰色のバーが異なる明るさに見えますが、実際には同じ色です。",
        draw: drawWhiteIllusion
    },
    {
        name: "ネッカーキューブ",
        description: "見ていると、立方体の向きが反転して見える多義図形です。",
        draw: drawNeckerCube
    },
    {
        name: "ルビンの壺",
        description: "壺にも見えるし、向かい合った2つの顔にも見える図形です。",
        draw: drawRubinVase
    },
    {
        name: "カニッツァの三角形",
        description: "実際には描かれていない白い三角形が見える錯視です。",
        draw: drawKanizsa
    },
    {
        name: "デルブーフ錯視",
        description: "外側の円の大きさにより、内側の同じ大きさの円が異なって見えます。",
        draw: drawDelboeuf
    },
    {
        name: "フィック錯視",
        description: "同じ長さの縦線と横線で、縦線の方が長く見える錯視です。",
        draw: drawFick
    },
    {
        name: "ジャストロー錯視",
        description: "2つの同じ大きさの曲線が、異なる大きさに見える錯視です。",
        draw: drawJastrow
    },
    {
        name: "チェッカーシャドウ錯視",
        description: "影の中と外で同じ色のマスが、異なる明るさに見えます。",
        draw: drawCheckerShadow
    },
    {
        name: "モーションバインディング",
        description: "色と動きが結びついて見える錯視です。静止画でもパターンが動いて見えます。",
        draw: drawMotionBinding
    },
    {
        name: "シェパードのテーブル",
        description: "2つのテーブルは実際には同じ形ですが、違って見える錯視です。",
        draw: drawShepardTables
    },
    {
        name: "フィッシャー錯視",
        description: "平行な線が、中央で曲がって見える錯視です。",
        draw: drawFraser
    }
];

let currentIndex = 0;
const canvas = document.getElementById('illusion-canvas');
const ctx = canvas.getContext('2d');

// Canvas サイズの設定
function resizeCanvas() {
    const container = canvas.parentElement;
    // モバイルではより余白を小さく
    const padding = window.innerWidth <= 600 ? 10 : 40;
    const size = Math.min(container.clientWidth - padding, 600);
    canvas.width = size;
    canvas.height = size;
    drawCurrentIllusion();
}

// 現在の錯視を描画
function drawCurrentIllusion() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const illusion = illusions[currentIndex];
    document.getElementById('illusion-name').textContent = illusion.name;
    document.getElementById('illusion-description').textContent = illusion.description;
    document.getElementById('current-index').textContent = currentIndex + 1;
    document.getElementById('total-count').textContent = illusions.length;

    illusion.draw(ctx, canvas.width, canvas.height);
}

// ミュラー・リヤー錯視
function drawMullerLyer(ctx, w, h) {
    const centerY = h / 2;
    const lineLength = w * 0.4;
    const arrowSize = 40;

    // 上の線（外向き矢印）
    const y1 = centerY - 80;
    const x1Start = w * 0.3;
    const x1End = x1Start + lineLength;

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;

    // 線
    ctx.beginPath();
    ctx.moveTo(x1Start, y1);
    ctx.lineTo(x1End, y1);
    ctx.stroke();

    // 左の矢印（外向き）
    ctx.beginPath();
    ctx.moveTo(x1Start, y1);
    ctx.lineTo(x1Start + arrowSize, y1 - arrowSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x1Start, y1);
    ctx.lineTo(x1Start + arrowSize, y1 + arrowSize);
    ctx.stroke();

    // 右の矢印（外向き）
    ctx.beginPath();
    ctx.moveTo(x1End, y1);
    ctx.lineTo(x1End - arrowSize, y1 - arrowSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x1End, y1);
    ctx.lineTo(x1End - arrowSize, y1 + arrowSize);
    ctx.stroke();

    // 下の線（内向き矢印）
    const y2 = centerY + 80;
    const x2Start = w * 0.3;
    const x2End = x2Start + lineLength;

    // 線
    ctx.beginPath();
    ctx.moveTo(x2Start, y2);
    ctx.lineTo(x2End, y2);
    ctx.stroke();

    // 左の矢印（内向き）
    ctx.beginPath();
    ctx.moveTo(x2Start, y2);
    ctx.lineTo(x2Start - arrowSize, y2 - arrowSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2Start, y2);
    ctx.lineTo(x2Start - arrowSize, y2 + arrowSize);
    ctx.stroke();

    // 右の矢印（内向き）
    ctx.beginPath();
    ctx.moveTo(x2End, y2);
    ctx.lineTo(x2End + arrowSize, y2 - arrowSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2End, y2);
    ctx.lineTo(x2End + arrowSize, y2 + arrowSize);
    ctx.stroke();
}

// エビングハウス錯視
function drawEbbinghaus(ctx, w, h) {
    const centerY = h / 2;
    const scale = Math.min(w, h);
    const innerRadius = scale * 0.06;

    // 左側（大きな円に囲まれた小さな中央円）
    const leftX = w * 0.3;
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(leftX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fill();

    const largeRadius = scale * 0.1;
    const largeDistance = scale * 0.18;
    ctx.strokeStyle = '#4ecdc4';
    ctx.lineWidth = Math.max(2, scale * 0.005);
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const x = leftX + Math.cos(angle) * largeDistance;
        const y = centerY + Math.sin(angle) * largeDistance;
        ctx.beginPath();
        ctx.arc(x, y, largeRadius, 0, Math.PI * 2);
        ctx.stroke();
    }

    // 右側（小さな円に囲まれた同じ大きさの中央円）
    const rightX = w * 0.7;
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(rightX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fill();

    const smallRadius = scale * 0.03;
    const smallDistance = scale * 0.12;
    ctx.strokeStyle = '#4ecdc4';
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const x = rightX + Math.cos(angle) * smallDistance;
        const y = centerY + Math.sin(angle) * smallDistance;
        ctx.beginPath();
        ctx.arc(x, y, smallRadius, 0, Math.PI * 2);
        ctx.stroke();
    }
}

// ヘルマン格子錯視
function drawHermannGrid(ctx, w, h) {
    const gridSize = 8;
    const squareSize = Math.min(w, h) * 0.7 / gridSize;
    const gap = squareSize * 0.25;
    const startX = (w - (gridSize * squareSize + (gridSize - 1) * gap)) / 2;
    const startY = (h - (gridSize * squareSize + (gridSize - 1) * gap)) / 2;

    ctx.fillStyle = '#000';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const x = startX + i * (squareSize + gap);
            const y = startY + j * (squareSize + gap);
            ctx.fillRect(x, y, squareSize, squareSize);
        }
    }
}

// ツェルナー錯視
function drawZollner(ctx, w, h) {
    const lineCount = 10;
    const lineSpacing = h / (lineCount + 1);
    const shortLineLength = 20;
    const shortLineSpacing = 15;

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    for (let i = 1; i <= lineCount; i++) {
        const y = i * lineSpacing;

        // 平行線
        ctx.beginPath();
        ctx.moveTo(w * 0.2, y);
        ctx.lineTo(w * 0.8, y);
        ctx.stroke();

        // 斜線
        const angle = (i % 2 === 0) ? Math.PI / 4 : -Math.PI / 4;
        ctx.lineWidth = 1;
        for (let x = w * 0.2; x < w * 0.8; x += shortLineSpacing) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(
                x + Math.cos(angle) * shortLineLength,
                y + Math.sin(angle) * shortLineLength
            );
            ctx.stroke();
        }
        ctx.lineWidth = 2;
    }
}

// カフェウォール錯視
function drawCafeWall(ctx, w, h) {
    const rows = 10;
    const cols = 12;
    const tileWidth = w * 0.8 / cols;
    const tileHeight = h * 0.8 / rows;
    const startX = w * 0.1;
    const startY = h * 0.1;
    const grayHeight = 4;

    for (let row = 0; row < rows; row++) {
        const offset = (row % 2) * (tileWidth / 2);

        for (let col = 0; col < cols + 1; col++) {
            const x = startX + col * tileWidth - offset;
            const y = startY + row * (tileHeight + grayHeight);

            // 黒と白のタイル
            ctx.fillStyle = (col % 2 === 0) ? '#000' : '#fff';
            ctx.fillRect(x, y, tileWidth, tileHeight);
        }

        // 灰色の線
        ctx.fillStyle = '#888';
        ctx.fillRect(startX - offset, startY + row * (tileHeight + grayHeight) + tileHeight, w * 0.8 + tileWidth, grayHeight);
    }
}

// ポンゾ錯視
function drawPonzo(ctx, w, h) {
    // 遠近法の線
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.9);
    ctx.lineTo(w * 0.5, h * 0.1);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.9);
    ctx.lineTo(w * 0.5, h * 0.1);
    ctx.stroke();

    // 横線（同じ長さ）
    const lineLength = w * 0.15;
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 4;

    // 上の線
    ctx.beginPath();
    ctx.moveTo(w * 0.5 - lineLength / 2, h * 0.3);
    ctx.lineTo(w * 0.5 + lineLength / 2, h * 0.3);
    ctx.stroke();

    // 下の線
    ctx.beginPath();
    ctx.moveTo(w * 0.5 - lineLength / 2, h * 0.7);
    ctx.lineTo(w * 0.5 + lineLength / 2, h * 0.7);
    ctx.stroke();
}

// 渦巻き錯視
function drawSpiral(ctx, w, h) {
    const centerX = w / 2;
    const centerY = h / 2;
    const rings = 6;
    const segmentsPerRing = 16;

    for (let ring = 1; ring <= rings; ring++) {
        const radius = ring * (Math.min(w, h) * 0.35 / rings);

        for (let seg = 0; seg < segmentsPerRing; seg++) {
            const angle1 = (seg / segmentsPerRing) * Math.PI * 2;
            const angle2 = ((seg + 0.5) / segmentsPerRing) * Math.PI * 2;

            ctx.fillStyle = (seg % 2 === 0) ? '#000' : '#fff';

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, angle1, angle2);
            ctx.arc(centerX, centerY, radius - (Math.min(w, h) * 0.35 / rings) * 0.8, angle2, angle1, true);
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = (ring % 2 === 0) ? '#888' : '#666';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
}

// ペンローズの三角形
function drawPenrose(ctx, w, h) {
    const centerX = w / 2;
    const centerY = h / 2;
    const size = Math.min(w, h) * 0.3;

    ctx.fillStyle = '#3498db';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    // 三角形の3つの頂点
    const angle1 = -Math.PI / 2;
    const angle2 = angle1 + (Math.PI * 2 / 3);
    const angle3 = angle2 + (Math.PI * 2 / 3);

    const p1x = centerX + Math.cos(angle1) * size;
    const p1y = centerY + Math.sin(angle1) * size;
    const p2x = centerX + Math.cos(angle2) * size;
    const p2y = centerY + Math.sin(angle2) * size;
    const p3x = centerX + Math.cos(angle3) * size;
    const p3y = centerY + Math.sin(angle3) * size;

    const thickness = size * 0.25;

    // 各辺を描画
    function drawBar(x1, y1, x2, y2, lightSide) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = -dy / len * thickness;
        const ny = dx / len * thickness;

        // 外側の面
        ctx.fillStyle = '#3498db';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x2 + nx, y2 + ny);
        ctx.lineTo(x1 + nx, y1 + ny);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 内側の面（暗い）
        ctx.fillStyle = '#2980b9';
        ctx.beginPath();
        ctx.moveTo(x1 + nx * 0.5, y1 + ny * 0.5);
        ctx.lineTo(x2 + nx * 0.5, y2 + ny * 0.5);
        ctx.lineTo(x2 + nx, y2 + ny);
        ctx.lineTo(x1 + nx, y1 + ny);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    drawBar(p1x, p1y, p2x, p2y, true);
    drawBar(p2x, p2y, p3x, p3y, false);
    drawBar(p3x, p3y, p1x, p1y, true);
}

// 回転する蛇
function drawRotatingSnakes(ctx, w, h) {
    const patterns = 4;
    const size = Math.min(w, h) * 0.2;

    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            const centerX = w * (0.3 + col * 0.4);
            const centerY = h * (0.3 + row * 0.4);

            const colors = ['#000', '#fff', '#3498db', '#e74c3c'];
            const segments = 16;

            for (let i = 0; i < segments; i++) {
                const angle1 = (i / segments) * Math.PI * 2;
                const angle2 = ((i + 1) / segments) * Math.PI * 2;
                const colorIndex = Math.floor(i / (segments / colors.length)) % colors.length;

                ctx.fillStyle = colors[colorIndex];
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, size, angle1, angle2);
                ctx.closePath();
                ctx.fill();

                // 小さな色のアクセント
                const accentAngle = (angle1 + angle2) / 2;
                const accentRadius = size * 0.7;
                const accentSize = size * 0.15;

                ctx.fillStyle = colors[(colorIndex + 2) % colors.length];
                ctx.beginPath();
                ctx.arc(
                    centerX + Math.cos(accentAngle) * accentRadius,
                    centerY + Math.sin(accentAngle) * accentRadius,
                    accentSize,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
        }
    }
}

// 白の錯視
function drawWhiteIllusion(ctx, w, h) {
    const barWidth = w * 0.6;
    const barHeight = h * 0.15;
    const barSpacing = h * 0.25;
    const grayColor = '#808080';

    // 背景パターン
    const stripeWidth = 20;
    for (let x = 0; x < w; x += stripeWidth * 2) {
        ctx.fillStyle = '#000';
        ctx.fillRect(x, 0, stripeWidth, h / 2 - barSpacing / 2);
        ctx.fillRect(x, h / 2 + barSpacing / 2, stripeWidth, h / 2);

        ctx.fillStyle = '#fff';
        ctx.fillRect(x + stripeWidth, 0, stripeWidth, h / 2 - barSpacing / 2);
        ctx.fillRect(x + stripeWidth, h / 2 + barSpacing / 2, stripeWidth, h / 2);
    }

    // 上の灰色バー（黒の背景）
    ctx.fillStyle = grayColor;
    ctx.fillRect((w - barWidth) / 2, h * 0.25, barWidth, barHeight);

    // 下の灰色バー（白の背景）
    ctx.fillRect((w - barWidth) / 2, h * 0.65, barWidth, barHeight);

    // 実際には同じ色であることを示す接続線
    ctx.strokeStyle = grayColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w / 2, h * 0.25 + barHeight);
    ctx.lineTo(w / 2, h * 0.65);
    ctx.stroke();
    ctx.setLineDash([]);
}

// ネッカーキューブ
function drawNeckerCube(ctx, w, h) {
    const centerX = w / 2;
    const centerY = h / 2;
    const size = Math.min(w, h) * 0.25;

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;

    // 前面の正方形
    const frontPoints = [
        [centerX - size, centerY - size * 0.5],
        [centerX + size, centerY - size * 0.5],
        [centerX + size, centerY + size * 0.5],
        [centerX - size, centerY + size * 0.5]
    ];

    // 背面の正方形（オフセット）
    const offset = size * 0.7;
    const backPoints = [
        [centerX - size + offset, centerY - size * 0.5 - offset],
        [centerX + size + offset, centerY - size * 0.5 - offset],
        [centerX + size + offset, centerY + size * 0.5 - offset],
        [centerX - size + offset, centerY + size * 0.5 - offset]
    ];

    // 前面の正方形を描画
    ctx.beginPath();
    ctx.moveTo(frontPoints[0][0], frontPoints[0][1]);
    for (let i = 1; i < 4; i++) {
        ctx.lineTo(frontPoints[i][0], frontPoints[i][1]);
    }
    ctx.closePath();
    ctx.stroke();

    // 背面の正方形を描画
    ctx.beginPath();
    ctx.moveTo(backPoints[0][0], backPoints[0][1]);
    for (let i = 1; i < 4; i++) {
        ctx.lineTo(backPoints[i][0], backPoints[i][1]);
    }
    ctx.closePath();
    ctx.stroke();

    // 接続線
    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(frontPoints[i][0], frontPoints[i][1]);
        ctx.lineTo(backPoints[i][0], backPoints[i][1]);
        ctx.stroke();
    }
}

// ルビンの壺
function drawRubinVase(ctx, w, h) {
    const centerX = w / 2;
    const centerY = h / 2;
    const vaseWidth = w * 0.25;
    const vaseHeight = h * 0.6;

    ctx.fillStyle = '#000';

    // 壺の輪郭を描画
    ctx.beginPath();
    ctx.moveTo(centerX - vaseWidth, centerY - vaseHeight / 2);

    // 左側の顔の輪郭（壺の左側）
    ctx.bezierCurveTo(
        centerX - vaseWidth * 1.5, centerY - vaseHeight * 0.3,
        centerX - vaseWidth * 1.3, centerY - vaseHeight * 0.1,
        centerX - vaseWidth * 0.8, centerY
    );
    ctx.bezierCurveTo(
        centerX - vaseWidth * 1.3, centerY + vaseHeight * 0.1,
        centerX - vaseWidth * 1.5, centerY + vaseHeight * 0.3,
        centerX - vaseWidth, centerY + vaseHeight / 2
    );

    // 底部
    ctx.lineTo(centerX + vaseWidth, centerY + vaseHeight / 2);

    // 右側の顔の輪郭（壺の右側）
    ctx.bezierCurveTo(
        centerX + vaseWidth * 1.5, centerY + vaseHeight * 0.3,
        centerX + vaseWidth * 1.3, centerY + vaseHeight * 0.1,
        centerX + vaseWidth * 0.8, centerY
    );
    ctx.bezierCurveTo(
        centerX + vaseWidth * 1.3, centerY - vaseHeight * 0.1,
        centerX + vaseWidth * 1.5, centerY - vaseHeight * 0.3,
        centerX + vaseWidth, centerY - vaseHeight / 2
    );

    ctx.closePath();
    ctx.fill();
}

// カニッツァの三角形
function drawKanizsa(ctx, w, h) {
    const centerX = w / 2;
    const centerY = h / 2;
    const triangleSize = Math.min(w, h) * 0.35;
    const circleRadius = 50;

    // 3つの角度で円を配置
    for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
        const x = centerX + Math.cos(angle) * triangleSize;
        const y = centerY + Math.sin(angle) * triangleSize;

        // パックマン型の円（三角形の角に向けて切り欠き）
        const cutAngle = angle + Math.PI;

        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(x, y, circleRadius, cutAngle + Math.PI / 6, cutAngle - Math.PI / 6);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.fill();
    }

    // 中央の三角形の頂点に小さな円を配置（オプション）
    ctx.fillStyle = '#000';
    for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2 - Math.PI / 2 + Math.PI;
        const x = centerX + Math.cos(angle) * (triangleSize * 0.5);
        const y = centerY + Math.sin(angle) * (triangleSize * 0.5);

        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
    }
}

// デルブーフ錯視
function drawDelboeuf(ctx, w, h) {
    const centerY = h / 2;
    const scale = Math.min(w, h);
    const innerRadius = scale * 0.08;

    // 左側：小さな外円
    const leftX = w * 0.3;
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(leftX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#000';
    ctx.lineWidth = Math.max(2, scale * 0.005);
    ctx.beginPath();
    ctx.arc(leftX, centerY, innerRadius + scale * 0.03, 0, Math.PI * 2);
    ctx.stroke();

    // 右側：大きな外円
    const rightX = w * 0.7;
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(rightX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#000';
    ctx.lineWidth = Math.max(2, scale * 0.005);
    ctx.beginPath();
    ctx.arc(rightX, centerY, innerRadius + scale * 0.12, 0, Math.PI * 2);
    ctx.stroke();
}

// フィック錯視
function drawFick(ctx, w, h) {
    const centerX = w / 2;
    const centerY = h / 2;
    const lineLength = Math.min(w, h) * 0.35;

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;

    // 縦線
    ctx.beginPath();
    ctx.moveTo(centerX - lineLength * 0.7, centerY - lineLength / 2);
    ctx.lineTo(centerX - lineLength * 0.7, centerY + lineLength / 2);
    ctx.stroke();

    // 横線（同じ長さ）
    ctx.beginPath();
    ctx.moveTo(centerX + lineLength * 0.2, centerY);
    ctx.lineTo(centerX + lineLength * 0.2 + lineLength, centerY);
    ctx.stroke();

    // 測定マーク
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#e74c3c';

    // 縦線の端
    ctx.beginPath();
    ctx.moveTo(centerX - lineLength * 0.7 - 15, centerY - lineLength / 2);
    ctx.lineTo(centerX - lineLength * 0.7 + 15, centerY - lineLength / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX - lineLength * 0.7 - 15, centerY + lineLength / 2);
    ctx.lineTo(centerX - lineLength * 0.7 + 15, centerY + lineLength / 2);
    ctx.stroke();

    // 横線の端
    ctx.beginPath();
    ctx.moveTo(centerX + lineLength * 0.2, centerY - 15);
    ctx.lineTo(centerX + lineLength * 0.2, centerY + 15);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX + lineLength * 0.2 + lineLength, centerY - 15);
    ctx.lineTo(centerX + lineLength * 0.2 + lineLength, centerY + 15);
    ctx.stroke();
}

// ジャストロー錯視
function drawJastrow(ctx, w, h) {
    const centerX = w / 2;
    const centerY = h / 2;
    const innerRadius = 80;
    const outerRadius = 150;
    const arcAngle = Math.PI * 0.6;

    function drawArc(x, y, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);

        ctx.fillStyle = '#3498db';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(0, 0, outerRadius, 0, arcAngle);
        ctx.arc(0, 0, innerRadius, arcAngle, 0, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }

    // 上の図形
    drawArc(centerX, centerY - 80, 0);

    // 下の図形（反転）
    drawArc(centerX, centerY + 80, Math.PI);
}

// チェッカーシャドウ錯視
function drawCheckerShadow(ctx, w, h) {
    const rows = 8;
    const cols = 8;
    const squareSize = Math.min(w, h) * 0.7 / cols;
    const startX = (w - cols * squareSize) / 2;
    const startY = (h - rows * squareSize) / 2;

    // チェッカーボード
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = startX + col * squareSize;
            const y = startY + row * squareSize;

            ctx.fillStyle = ((row + col) % 2 === 0) ? '#fff' : '#000';
            ctx.fillRect(x, y, squareSize, squareSize);
        }
    }

    // 影を追加
    ctx.fillStyle = 'rgba(0, 100, 0, 0.4)';
    ctx.beginPath();
    ctx.moveTo(startX + squareSize * 2, startY + squareSize);
    ctx.lineTo(startX + squareSize * 6, startY + squareSize);
    ctx.lineTo(startX + squareSize * 6, startY + squareSize * 6);
    ctx.lineTo(startX + squareSize * 2, startY + squareSize * 6);
    ctx.closePath();
    ctx.fill();

    // 特定のマスを強調表示（実際には同じ色）
    const highlightColor = '#808080';
    ctx.fillStyle = highlightColor;

    // マス A（影の外）
    ctx.fillRect(startX + squareSize * 1, startY + squareSize * 3, squareSize, squareSize);

    // マス B（影の中）
    ctx.fillRect(startX + squareSize * 3, startY + squareSize * 3, squareSize, squareSize);

    // ラベル
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('A', startX + squareSize * 1.3, startY + squareSize * 3.6);
    ctx.fillText('B', startX + squareSize * 3.3, startY + squareSize * 3.6);
}

// モーションバインディング
function drawMotionBinding(ctx, w, h) {
    const rows = 4;
    const cols = 4;
    const cellSize = Math.min(w, h) * 0.7 / cols;
    const startX = (w - cols * cellSize) / 2;
    const startY = (h - rows * cellSize) / 2;

    const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = startX + col * cellSize;
            const y = startY + row * cellSize;
            const colorIndex = (row + col) % colors.length;

            // 背景
            ctx.fillStyle = '#000';
            ctx.fillRect(x, y, cellSize, cellSize);

            // 色付きパターン
            const segments = 8;
            for (let i = 0; i < segments; i++) {
                const angle = (i / segments) * Math.PI * 2;
                const nextAngle = ((i + 1) / segments) * Math.PI * 2;

                if (i % 2 === 0) {
                    ctx.fillStyle = colors[colorIndex];
                } else {
                    ctx.fillStyle = '#fff';
                }

                ctx.beginPath();
                ctx.moveTo(x + cellSize / 2, y + cellSize / 2);
                ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize * 0.4, angle, nextAngle);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}

// シェパードのテーブル
function drawShepardTables(ctx, w, h) {
    const centerX = w / 2;
    const centerY = h / 2;

    ctx.fillStyle = '#8B4513';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    // 左のテーブル（縦長）
    const leftTable = [
        [centerX - 200, centerY - 80],
        [centerX - 120, centerY - 80],
        [centerX - 80, centerY - 40],
        [centerX - 160, centerY - 40]
    ];

    ctx.beginPath();
    ctx.moveTo(leftTable[0][0], leftTable[0][1]);
    for (let i = 1; i < leftTable.length; i++) {
        ctx.lineTo(leftTable[i][0], leftTable[i][1]);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 脚
    ctx.beginPath();
    ctx.moveTo(leftTable[0][0], leftTable[0][1]);
    ctx.lineTo(leftTable[0][0] - 10, centerY + 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(leftTable[1][0], leftTable[1][1]);
    ctx.lineTo(leftTable[1][0] + 10, centerY + 100);
    ctx.stroke();

    // 右のテーブル（横長）
    const rightTable = [
        [centerX + 80, centerY - 40],
        [centerX + 160, centerY - 40],
        [centerX + 200, centerY + 80],
        [centerX + 120, centerY + 80]
    ];

    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.moveTo(rightTable[0][0], rightTable[0][1]);
    for (let i = 1; i < rightTable.length; i++) {
        ctx.lineTo(rightTable[i][0], rightTable[i][1]);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 脚
    ctx.beginPath();
    ctx.moveTo(rightTable[0][0], rightTable[0][1]);
    ctx.lineTo(rightTable[0][0] - 10, centerY + 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(rightTable[1][0], rightTable[1][1]);
    ctx.lineTo(rightTable[1][0] + 10, centerY + 100);
    ctx.stroke();
}

// フレーザー錯視
function drawFraser(ctx, w, h) {
    const centerX = w / 2;
    const lineCount = 12;
    const lineSpacing = h / (lineCount + 1);

    ctx.lineWidth = 2;

    for (let i = 1; i <= lineCount; i++) {
        const y = i * lineSpacing;

        // 背景の斜線パターン
        const segmentWidth = 20;
        const shift = (i % 2) * 10;

        for (let x = 0; x < w; x += segmentWidth * 2) {
            ctx.fillStyle = '#000';
            ctx.fillRect(x + shift, y - 8, segmentWidth, 16);
            ctx.fillStyle = '#fff';
            ctx.fillRect(x + segmentWidth + shift, y - 8, segmentWidth, 16);
        }

        // 水平線
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * 0.1, y);
        ctx.lineTo(w * 0.9, y);
        ctx.stroke();
    }
}

// ランダム表示
function showRandomIllusion() {
    currentIndex = Math.floor(Math.random() * illusions.length);
    drawCurrentIllusion();
}

// 次の錯視
function showNextIllusion() {
    currentIndex = (currentIndex + 1) % illusions.length;
    drawCurrentIllusion();
}

// 前の錯視
function showPrevIllusion() {
    currentIndex = (currentIndex - 1 + illusions.length) % illusions.length;
    drawCurrentIllusion();
}

// イベントリスナー
document.getElementById('prev-btn').addEventListener('click', showPrevIllusion);
document.getElementById('random-btn').addEventListener('click', showRandomIllusion);
document.getElementById('next-btn').addEventListener('click', showNextIllusion);
window.addEventListener('resize', resizeCanvas);

// 初期化
resizeCanvas();
showRandomIllusion();
