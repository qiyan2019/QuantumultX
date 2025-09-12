// QuantumultX - 修改 Byte Sweep 会员状态为非会员
var body = $response.body
    // 将 bytesweepNewvip 改为 0
    .replace(/"bytesweepNewvip"\s*:\s*\d+/g, '"bytesweepNewvip":0')
    // 将 bytesweepVip 改为 0
    .replace(/"bytesweepVip"\s*:\s*\d+/g, '"bytesweepVip":0')
    // 清空 bytesweepNewvipCt
    .replace(/"bytesweepNewvipCt"\s*:\s*"\[.*?\]"/g, '"bytesweepNewvipCt":"[]"')
    // 清空 bytesweepVipCt
    .replace(/"bytesweepVipCt"\s*:\s*"\[.*?\]"/g, '"bytesweepVipCt":"[]"');

$done({ body });
