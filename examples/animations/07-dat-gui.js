const initGui = (obj) => {
    var gui = new dat.gui.GUI();

    gui.remember(obj);

    gui.add(obj, 'fl').min(100).max(1000).step(10);
    gui.add(obj, 'vpX').min(0).max(400).step(10);
    gui.add(obj, 'vpY').min(0).max(400).step(10);

    return { gui, obj };
}